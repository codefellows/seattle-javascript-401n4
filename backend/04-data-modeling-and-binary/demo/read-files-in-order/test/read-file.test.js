'use strict';

const expect = require('expect');
const readFiles = require('../lib/read-in-order');

describe('read files in order', function() {
  before(function() {
    this.files = [__dirname + '/files/one.txt', __dirname + '/files/two.txt', __dirname + '/files/three.txt'];
    this.results = ['first file\n', 'second file\n', 'third file\n'];
  });

  it('should callback with an error if fileList is not an array', function(done) {
    readFiles(null, function(err, data) {
      expect(err).not.toBe(null);
      expect(err.message).toBe('the first paramter has to be an Array');
      expect(data).toBe(undefined);
      done();
    })
  });

  it('should callback an error with a bad file name', function(done) {
    readFiles(['doesnotexist'], function(err, data) {
      expect(err).not.toBe(null);
      expect(err.message).toBe("ENOENT: no such file or directory, open 'doesnotexist'");
      expect(data).toBe(undefined);
      done();
    });
  });

  it('should read files in order', function(done) {
    readFiles(this.files, (err, data) => {
      expect(err).toBe(null);
      data.forEach((result, index) => {
        expect(result).toBe(this.results[index]);
      })

      done();
    });
  });
});
