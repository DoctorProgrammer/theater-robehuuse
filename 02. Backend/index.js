const app = require("express")();
const mysql = require('mysql');

const hostname = "127.0.0.1";
const port = 3000;

function sqlQuery(query, req, res) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'theater-robehuuse',
        password: '123456789',
        database: 'theater_robehuuse_api'
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

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/", (req, res) => {
    res.send("Startseite");
});

app.get("/person/:id", (req, res) => {
    sqlQuery("SELECT * FROM `test`", req, res);
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
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
*/
