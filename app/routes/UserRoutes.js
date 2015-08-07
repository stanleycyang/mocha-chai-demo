var express = require('express'), 
    router = express.Router(),
    User = require('../models/User');

router.get('/', function(request, response, next){
    User.find(function(error, users){
        if(error) return response.send(error);
        response.send(users);
    });
});

router.get('/:id', function(request, response, next){
    User.findOne({_id: request.params.id}, function(error, user){
        if(error) return response.send(error);
        response.send(user);
    });
});

router.post('/', function(request, response, next){
    var user = new User({
       name: request.body.name 
    });

    user.save(function(error, user){
        if(error) return response.send(error);
        response.send(user);
    });
});

router.put('/:id', function(request, response, next){
    User.update({_id: request.params.id}, {
        name: request.body.name
    }, function(error, user){
        if(error) return response.send(error);
        response.send(user);
    });
});

router.delete('/:id', function(request, response, next){
    User.findByIdAndRemove(request.params.id, function(error){
        if(error) return response.send(error);
        response.send({success: true, id: request.params.id});
    });
});

module.exports = router;
