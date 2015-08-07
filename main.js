var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    http = require('http'),
    path = require('path'),
    logger = require('morgan'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    port = 3000;

mongoose.connect('mongodb://localhost/mocha_app');

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

// Source in routes
var UserRoutes = require('./app/routes/UserRoutes')

// Use the routes
app.use('/users', UserRoutes);

var server = http.createServer(app);
server.listen(port);
console.log('Listening on port ' + port);

















