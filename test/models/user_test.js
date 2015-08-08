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

    it('is a model with full suite of functions', function(){
        expect(User.find).to.exist;
        expect(typeof User.find).to.equal('function');

        expect(User.findOne).to.exist;
        expect(typeof User.findOne).to.equal('function');

        expect(User.remove).to.exist;
        expect(typeof User.remove).to.equal('function');

        expect(User.count).to.exist;
        expect(typeof User.count).to.equal('function');

        expect(User.findById).to.exist;
        expect(typeof User.findById).to.equal('function');

        expect(User.findByIdAndRemove).to.exist;
        expect(typeof User.findByIdAndRemove).to.equal('function');

        expect(User.findByIdAndUpdate).to.exist;
        expect(typeof User.findByIdAndUpdate).to.equal('function');

        expect(User.findOneAndRemove).to.exist;
        expect(typeof User.findOneAndRemove).to.equal('function');

        expect(User.update).to.exist;
        expect(typeof User.update).to.equal('function');
           
    });



});
