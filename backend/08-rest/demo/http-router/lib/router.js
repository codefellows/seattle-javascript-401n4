'use strict';

let router = module.exports = exports = {};
router.routes = {
  'GET': {},
  'POST': {},
  'PUT': {},
  'PATCH': {},
  'DELETE': {}
};

router.get = function(pathname, callback) {
  router.routes['GET'][pathname] = callback;
};
