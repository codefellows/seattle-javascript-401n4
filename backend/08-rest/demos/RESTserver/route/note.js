'use strict';

const Note = require('../model/note.js');
const router = require('../lib/router.js');

const databaseFile = __dirname + "/../model/data/notes.dat";
const storage = require("../lib/storage")(databaseFile);

let sendStatus = (res, status, text) => {
    res.writeHead(status);
    res.write(text);
    res.end();
};

let sendJSON = (res, status, data) => {
    res.writeHead(status, {
        'Content-Type':'application/json'        
    });
    res.end(JSON.stringify(data));
};

router.post('/api/notes', (req,res) => {
    
    if ( ! req.body.title ) { 
        return sendStatus(res, 400, "Missing Title");
    }
    if ( ! req.body.content ) { 
        return sendStatus(res, 400, "Missing Content");
    }
    
    let note = new Note(req.body); 
    
    storage.saveItem(note)
       .then( item => sendJSON(res, 201, item) )
       .catch( err => sendStatus(res, 500, err) );
    
});


router.get('/api/notes', (req,res) => {
    
    let id = req.url && req.url.query && req.url.query.id;
    
    if ( id ) { 
        storage.getItem(id)
           .then(item => sendJSON(res, 200, item))
           .catch( err => sendStatus(res, 500, err));
    }
    else {
        
        storage.getItems()
          .then(allNotes => sendJSON(res, 200, allNotes) )
          .catch(err => sendStatus(res, 404, err) )
           
    }
});


router.delete("/api/notes", (req,res) => {
    
    let id = req.url && req.url.query && req.url.query.id;
    
    if ( id ) { 
        
        storage.deleteItem(id)
           .then(sendJSON(res, 200, "OK"))
           .catch(err => sendStatus(res, 500, err));
           
    }
    
});