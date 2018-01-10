'use strict';

const basicHttp = require(__dirname + '/../lib/basic-http');

it('should parse basic http authentication', () => {
  let testBuf = new Buffer('test:guest1234')
  let req = {headers: 
    {
      authorization: `Basic ${testBuf.toString('base64')}`
    }
  };
  basicHttp(req, null, function() {
    expect(arguments.length).toBe(0);
    expect(req.auth.username).toBe('test');
    expect(req.auth.password).toBe('guest1234');
  });
});

it('should fail with bad httpBasic', () => {
  basicHttp({}, null, function() {
    expect(arguments.length).toBe(1);
    expect(arguments[0] instanceof Error).toBe(true);
  });
});
