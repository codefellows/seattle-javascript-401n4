'use strict';

module.exports = (err, req, res, next) => {
  // console.error(err);

  if(err.status)
    return res.sendStatus(err.status);

  let message = err.message.toLowerCase();

  if(message.includes('objectid failed'))
    return res.sendStatus(404);

  if(message.includes('validation failed'))
    return res.sendStatus(400);

  if(message.includes('duplicate key'))
    return res.sendStatus(409);

  if(message.includes('unauthorized'))
    return res.sendStatus(401);

  res.sendStatus(500);
}
