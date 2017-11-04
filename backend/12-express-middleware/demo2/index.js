'use strict';

const express = require('express');
const app = express();

// This gets prepended to all "/" requests only
app.all('/', (req, res, next) => {
    console.log("Hello from all");
    next();
});

// This gets prepended to all requests
app.use( (req, res, next) => {
    console.log("Hello from use");
    // next(new Error("WTF")); // forces an error
    next(); // normal execution
});

// Also prepended ... here's how we can parse some JSON
// Basically, it'll parse JSON or send an error
app.use( (req, res, next) => {
    
    let text = '';
    req.on('data', data => text += data.toString());
    req.on('end', () => {
        
        try {
            req.text = text;
            req.body = JSON.parse(text);
        }
        catch(e) { next(e); }
        
        next();
    });
});

// Some error middleware -- responds to an error condition.
app.use( (err, req, res, next) => {
    console.log(err);
    res.status(err.statusCode || 500).send(`you screwed up, royally`);
});

let first = (req, res, next) => {
    console.log("Hello from first");
    next();
};

let final = (req, res) => {
    console.log("Hello from final");
    res.send("Dude");
};



app.get('/', first, final);

app.post('/', (req,res) => {
    res.send(req.text);
});

app.listen(3000);