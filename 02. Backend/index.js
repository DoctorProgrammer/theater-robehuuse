import express from "express";
import mysql from "mysql";
import ip from "ip";
import os from "os";

const port = process.env.SERVER_PORT || 3000; // const hostname = "localhost"; // Hostname vom Docker-Container: 172.18.0.4
const app = express();

function sqlQuery(query, req, res) {
    const connection = mysql.createConnection({
        host: os.MYSQL_HOST,
        user: os.MYSQL_USER,
        password: os.MYSQL_PASSWORD,
        database: os.MYSQL_DATABASE
    })

    connection.connect();
    connection.query(query, (err, rows) => {
        if (err) {
            connection.end();
            res.send(err);
        } else {
            let result = rows;
            connection.end();
            console.log(result)
            res.json(result[0]);
        }
    })
}

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/person/:id", (req, res) => {
    let id = parseInt(req.params.id);
    sqlQuery('SELECT * FROM `test` WHERE testID = ' + id, req, res);
});

app.listen(port, () => {
    console.log(`Server running on: http://${ip.address()}:${port}`);
});

/*
    Tutorial: https://www.geeksforgeeks.org/how-to-dockerize-an-expressjs-app/

    1. Start Docker
    2. docker run -d -p 3000:3000 --name Express-Container trachselr/web-world:latest
                   ^ optional              ^^^^^ Container-Name
       Falls Error: Container löschen mit dem namen "Express-Container": docker rm Express-Container
    3. Container "Express-Container" starten: docker start Express-Container
       Container "Express-Container" stoppen: docker stop Express-Container
    
    Nach änderungen in index.js: https://docs.docker.com/get-started/03_updating_app/
    1. docker stop Express-Container 
    2. docker rm Express-Container 
    3. docker build -t trachselr/theater-robehuuse:latest . 
    4. docker run -d -p 3000:3000 --name Express-Container trachselr/theater-robehuuse:latest

    Oder einfach:
    ./update.bat Theater-Robehuuse trachselr/theater-robehuuse:latest

    Push to Docker Hub:
    docker push trachselr/theater-robehuuse:latest

    docker run -p 8080:8080 --network="host" -e DB_HOST=localhost -e DB_PORT=3306 backend-image

    docker run -d --network theater-robehuuse-network --network-alias mysql -v theater-robehuuse-volume:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=123456789 -e MYSQL_DATABASE=theater-robehuuse-api mysql:8.0

    docker run -dp 3000:3000 -w /app -v "$(pwd):/app" --network todo-app -e MYSQL_HOST=mysql -e MYSQL_USER=root -e MYSQL_PASSWORD=secret -e MYSQL_DB=todos node:18-alpine sh -c "yarn install && yarn run dev"
    
    Docker Network:
        SQL:
            docker network create theater-robehuuse-network

        Backend:
            docker run -it --network theater-robehuuse-network trachselr/theater-robehuuse:latest

*/
