var express = require ('express');
var consign = require ('consign');
var bodyParser = require('body-parser');
var expressValidator = require ('express-validator');

var app = express();

const allowCors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH,DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization')
    next()
}


app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(allowCors)


consign()
    .include('app/routes')
    .then('config/bdconnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

module.exports = app;