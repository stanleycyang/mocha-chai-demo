var mocha = require('mocha'),
    expect = require('chai').expect,
    mockgoose = require('mockgoose'),
    mongoose = require('mongoose'),
    User = require('../../app/models/User'),
    mockUser;

mockgoose(mongoose);

describe('User', function(){

    // See if the model exists
    it('exists', function(){
        expect(User).to.exist;
    });

    it('is a constructor', function(){
        expect(typeof User).to.equal('function');
    });

    it('has the findOne functionality', function(){
        expect(User.findOne).to.exist;
        expect(typeof User.findOne).to.equal('function');
    });

    it('has the remove functionality', function(){
        expect(User.remove).to.exist;
        expect(typeof User.remove).to.equal('function');
    });

    it('has the count functionality', function(){
        expect(User.count).to.exist;
        expect(typeof User.count).to.equal('function');
    });

    it('has the findById functionality', function(){
        expect(User.findById).to.exist;
        expect(typeof User.findById).to.equal('function');
    });

    it('has the findByIdAndRemove functionality', function(){
        expect(User.findByIdAndRemove).to.exist;
        expect(typeof User.findByIdAndRemove).to.equal('function');
    });

    it('has the findByIdAndUpdate functionality', function(){
        expect(User.findByIdAndUpdate).to.exist;
        expect(typeof User.findByIdAndUpdate).to.equal('function');
    });

    it('has the findOneAndRemove functionality', function(){
        expect(User.findOneAndRemove).to.exist;
        expect(typeof User.findOneAndRemove).to.equal('function');
    });

    it('has the update functionality', function(){
        expect(User.update).to.exist;
        expect(typeof User.update).to.equal('function');
    });

    it('has the find functionality', function(){
        expect(User.find).to.exist;
        expect(typeof User.find).to.equal('function');
    });



});
