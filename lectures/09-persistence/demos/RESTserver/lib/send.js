'use strict';

const Send = module.exports = {};

Send.message = (res, status, text) => {
    res.writeHead(status);
    res.write(text);
    res.end();
    return text;
};

Send.json = (res, status, data) => {
    res.writeHead(status, {
        'Content-Type':'application/json'        
    });
    res.end(JSON.stringify(data));
    return data;
};