'use strict';

const expect = require('expect');
const readFile = require(__dirname + '/../lib/read-file');

describe('readFile', function() {
  before(function() {
    this.argvBackup = process.argv;
    process.argv = [null, null, __dirname + '/../data/file-one.txt'];
  });

  after(function() {
    process.argv = this.argvBackup;
  });

  it('should read a file from process.argv', function(done) {
    readFile((err, data) => {
      expect(err).toBe(null);

      expect(data).toBe('one\n');
      done();
    });
  });
});
