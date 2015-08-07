var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:3000');

describe('User', function(){
    describe('#index', function(){
        it('returns a 200 response', function(done){
            api.get('/users')
               .set('Accept', 'application/json')
               .expect(200, done);
        });

        it('is an object with keys and values', function(done){
            api.get('/users')
               .set('Accept', 'application/json')
               .expect(200)
               .end(function(error, response){
                    expect(response.body).to.be.an.instanceof(Array);
                    expect(response.body[0]).to.have.property('name');
                    expect(response.body[0].name).to.not.equal(null);
                    done();
               });
        });
    });

    describe('#create', function(){
        before(function(done){
            api.post('/users')
                .set('Accept', 'application/x-www-form-urlencoded')
                .send({
                    name: 'Stanley'
                })
                .expect('Content-Type', /json/)
                .expect(200)
                .end(function(error, response){
                    var user = response;
                    done();
                });
        });
        it('returns a new user', function(){
            api.post('/users')
               .set('Accept', 'application/x-www-form-urlencoded')
               .send({
                    name: 'Stanley'
               })
               .expect(200)
               .end(function(error, response){
                    expect(response.body.name).to.equal('Stanley');
                    expect(response.body).to.be.an.instanceof(Object);
                    done();
               });
        });
    });

    describe('#update', function(){
        it('is updated with a new name', function(){
            api.put('/users/55c3f53c070020e4c92898ee')
                .set('Accept', 'application/x-www-form-urlencoded')
                .send({
                    name: 'Sebastian'
                })
                .expect(200)
                .end(function(error, response){
                    expect(response.body.name).to.equal('Sebastian');
                    expect(response.body).to.be.an.instanceof(Object);
                    done();
                });
        });
    });

});











