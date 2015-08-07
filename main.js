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

var User = require('./app/models/User');

router.get('/users', function(request, response, next){
    User.find(function(error, users){
        if(error) return response.send(error);
        response.send(users);
    });
});

router.get('/users/:id', function(request, response, next){
    User.findOne({_id: request.params.id}, function(error, user){
        if(error) return response.send(error);
        response.send(user);
    });
});

router.post('/users', function(request, response, next){
    var user = new User({
       name: request.body.name 
    });

    user.save(function(error, user){
        if(error) return response.send(error);
        response.send(user);
    });
});

router.put('/users/:id', function(request, response, next){
    User.update({_id: request.params.id}, {
        name: request.body.name
    }, function(error, user){
        if(error) return response.send(error);
        response.send(user);
    });
});

router.delete('/users/:id', function(request, response, next){
    User.findByIdAndRemove(request.params.id, function(error){
        if(error) return response.send(error);
        response.send({success: true, id: request.params.id});
    });
});


app.use('/', router);

var server = http.createServer(app);
server.listen(port);
console.log('Listening on port ' + port);

















