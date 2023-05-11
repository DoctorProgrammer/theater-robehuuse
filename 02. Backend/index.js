const app = require("express")();
const hostname = "127.0.0.1";
const port = 3000;

app.get("/", (req, res) => {
    res.send("Startseite");
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
    3. docker build -t trachselr/web-world:latest . 
    4. docker run -d -p 3000:3000 --name Express-Container trachselr/web-world:latest

    Oder einfach:
    ./update.bat Theater-Robehuuse trachselr/theater-robehuuse:latest

    Push to Docker Hub:
    docker push trachselr/theater-robehuuse:latest

*/
