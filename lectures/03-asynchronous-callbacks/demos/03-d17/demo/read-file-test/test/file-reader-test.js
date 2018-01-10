'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

describe('File Reader Module', function() {
  describe('with improper file path', function() {
    it('should return an error', function(done) {
      fileReader(`${__dirname}/not-a-file.txt`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with a proper file path', function() {
    it('should return the content of the file', function(done) {
      fileReader(`${__dirname}/../data/data.txt`, function(err, data) {
        expect(err).to.equal(null);
        console.log(typeof data);
        expect(data).to.be.a('string');
        done();
      });
    });
  });
});  
