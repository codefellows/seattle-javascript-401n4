'use strict';

const greet = require('../lib/greet.js');
const expect = require('chai').expect;

describe('Greet Module', function() {
  describe('#sayHey', function() {
    it('should return hey brian!', function() {
      var result = greet.sayHey('brian');
      expect(greet).to.have.property('sayHey');
      expect(greet.sayHey).to.be.a('function');
      expect(greet).to.be.an('object');
      expect(result).to.equal('hey brian!');
      expect(result).to.be.a('string');
     });

    it('should throw a missing name error', function() {
      var result = greet.sayHey;
      expect(result).to.throw(Error);
    });
  });

  describe('#sayBye', function() {
    it('should return see ya later!', function() {
      var bye = greet.sayBye();
      expect(bye).to.equal('see ya later!');
      expect(bye).to.be.a('string');
    });
  });
});
