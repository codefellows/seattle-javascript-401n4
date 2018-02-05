/* global localStorage, __DEBUG__ */

// DEPENDENCIES
import AWS from 'aws-sdk';
import {extname} from 'path';
import fs from 'fs-extra';
import superagent from 'superagent';

// Given an object with properties that have boolean values, return an array of "truthy" keys
export const activeProps = (config) => Object.keys(config).filter( key => config[key] );

// A functional ternary. Based on boolean result of "test", returns either componentTrue or componentFalse/null
export const renderIf = (test, componentTrue, compoentFalse=null) => test ? componentTrue : compoentFalse;

// Logs based on boolean __DEBUG__ variable
export const log = (...args) => __DEBUG__ ? console.log(...args) : undefined;
export const logError = (...args) => __DEBUG__ ? console.error(...args) : undefined;

export const composer = (fn, ...defaults) => (...args) => fn(...defaults, ...args);

export const compose = (...fns) => (arg) => fns.reduce((result, next) => next(result), arg);

export const promisify = (fn) => (...args) => 
  new Promise((resolve, reject) => 
    fn(...args, (err, data) => err ? reject(err) : resolve(data)));

export const daysToMilliseconds = (days) => days * 1000 * 60 * 60 * 24;

export const map = (list, cb) =>  Array.prototype.map.call(list, cb);

export const filter = (list, cb) =>  Array.prototype.filter.call(list, cb);

export const reduce = (list, ...args) =>  Array.prototype.reduce.apply(list, args);

export const each = (list, cb) => Array.prototype.forEach.call(list, cb);

export const removeMulterFile = (data) => fs.remove(data.path);
export const removeMulterFiles = (list) => Promise.all(list.map(removeMulterFile));

export const s3UploadMulterFileAndClean = (data) => {
    
    const s3 = new AWS.S3();
    
    return s3.upload({
        ACL: 'public-read',
        Bucket: process.env.AWS_BUCKET,
        Key: `${data.filename}.${data.originalname}`,
        Body: fs.createReadStream(data.path),
    }).promise()
        .catch(err => fs.remove(data.path)
        .then(() => {throw err}))
        .then(s3Data => fs.remove(data.path)
        .then(() => s3Data));
};

export const fetchData = (url) => {

    return getCache(url)
        .then(data => data)
        .catch(err => {
            return superagent.get(url)
            .then(result => {
                setCache(url, result.body);
                return result.body;
            })
            .catch(console.log);
        })
        .then(data => data)
};

export const getCache = (key) => {

    return new Promise( (resolve,reject) => {
        let data = localStorage.getItem(key);
        if ( data ) { resolve( JSON.parse(data)); }
        else { reject("Invalid cache key", key); }
    });

};

export const setCache = (key, value) => {

    return new Promise( (resolve,reject) => {
        let safeValue = typeof value === "string" ? value : JSON.stringify(value);
        localStorage.setItem(key, safeValue);
        resolve();
    });

};