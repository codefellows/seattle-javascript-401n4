/* global jest */
'use strict';

const Send = module.exports = {};

Send.message = jest.fn( (res, status, text) => {
    return text;
});

Send.json = jest.fn ( (res, status, data) => {
    return data;
});