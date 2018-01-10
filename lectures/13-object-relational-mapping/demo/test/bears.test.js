'use strict';

const request = require('superagent');
const Bear = require('../models/bear');
const mongoose = require('mongoose');

process.env.DB_URL = 'mongodb://localhost:27017/bears_test';
const server = require('../server');
server.listen(5000);

beforeAll(() => {
  return Bear.remove({});
});

afterAll(() => {
  mongoose.connection.close();
  server.close();
});

test('it should create a bear', () => {
  return request
    .post('localhost:5000/api/v1/bears')
    .send({name: 'test'})
    .then((res) => {
      res = res.body;
      expect(res.name).toBe('test');
      expect(res.favoriteFood).toBe('salmons');
      expect(res.birthday).not.toBe(undefined);
      expect(res._id).not.toBe(undefined);
    });
});

test('it should get an array of bears', () => {
  return request
    .get('localhost:5000/api/v1/bears')
    .then(res => {
      expect(Array.isArray(res.body)).toBe(true);
    });
});

test('it should get a single bear', () => {
  (new Bear({name: 'testsingleget'})).save()
    .then((bear) => {
      return request
        .get('localhost:5000/api/v1/bears/' + bear._id)
        .then(res => {
          expect(res.body.name).toBe('testsingleget');
        });
    })
});

test('it should update with a put', () => {
  return (new Bear({name: 'testingaput'})).save()
    .then(bear => {
      return request
        .put('localhost:5000/api/v1/bears/' + bear._id)
        .send({name: 'newname'})
        .then(res => {
          expect(res.text).toBe('success!');
        })
    })
});

test('it should update with a patch', () => {
  return (new Bear({name: 'testingapatch'})).save()
    .then(bear => {
      return request
        .put('localhost:5000/api/v1/bears/' + bear._id)
        .send({name: 'patchnewname'})
        .then(res => {
          expect(res.text).toBe('success!');
        })
    })
});

test('it should be able to murder a bear', () => {
  return (new Bear({name: 'abouttobemurdered'})).save()
    .then(bear => {
      return request
        .delete('localhost:5000/api/v1/bears/' + bear._id)
        .then(res => {
          expect(res.text).toBe('bear successfully murdered');
        });
    })
});
