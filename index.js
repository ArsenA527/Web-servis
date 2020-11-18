const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

app.use(bodyParser.json());
app.post('/', (req, res) => {
    let obj;
    if (!req.body) return res.sendStatus(400);
    obj = req.body;
    let tmpl = _.template(obj.template);
    res.send({
        result: tmpl(obj.substitutions)
    })
});


app.listen(8080);