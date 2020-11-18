const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

app.use(bodyParser.json());
app.post('/', (req, res) => {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.send('It is Work')
});


app.listen(8080);