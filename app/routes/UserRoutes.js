var express = require('express'), 
    router = express.Router(),
    UsersController = require('../controllers/UsersController');

router.get('/', function(request, response, next){
    UsersController.index(request, response, next);
});

router.get('/:id', function(request, response, next){
    UsersController.show(request, response, next);
});

router.post('/', function(request, response, next){
    UsersController.create(request, response, next);
});

router.put('/:id', function(request, response, next){
    UsersController.update(request, response, next);
});

router.delete('/:id', function(request, response, next){
    UsersController.destroy(request, response, next);
});

module.exports = router;
