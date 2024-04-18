/*
    Version:    1.0
    Date:       18.04.2024
    Author:     Robin Trachsel

    Description:
    Backend for the Theater-Robehuuse project.
*/

const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    // logger
    console.log(`${req.method}\t${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Backend API is running for Theater-Robehuuse');
});

app.get('/apiInfo', (req, res) => {
    res.send('API Information');
});

app.listen(port, () => {
    console.log(`Server listening at http://${host}:${port}`);
});

// all Paths