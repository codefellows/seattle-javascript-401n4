'use strict';

const databaseFile = __dirname + "/../model/data/notes.dat";
const storage = require("../lib/storage")(databaseFile);
const send = require("../lib/send");
const Note = require('../model/note.js');

const handlers = module.exports = {};

// Expose the storage module (Need this for testing access)
handlers.storage = storage;

handlers.post = (req,res) => {
    
    if ( ! req.body.title ) { 
        return send.message(res, 400, "Missing Title");
    }
    if ( ! req.body.content ) { 
        return send.message(res, 400, "Missing Content");
    }
    
    let note = new Note(req.body); 
    
    return storage.saveItem(note)
       .then( item => send.json(res, 201, item) )
       .then( item => item )
       .catch( err => send.message(res, 500, err) );
    
};


handlers.get = (req,res) => {
    
    let id = req.url && req.url.query && req.url.query.id;
    
    if ( id ) { 
        return storage.getItem(id)
           .then(item => send.json(res, 200, item))
           .then( item => item )
           .catch( err => send.message(res, 500, err));
    }
    else {
        
        return storage.getItems()
          .then(allNotes => send.json(res, 200, allNotes) )
          .then( allNotes => allNotes )
          .catch(err => send.message(res, 404, err) )
           
    }
};


handlers.delete = (req,res) => {
    
    let id = req.url && req.url.query && req.url.query.id;
    
    if ( id ) { 
        
        return storage.deleteItem(id)
           .then(send.json(res, 200, "OK"))
           .catch(err => send.message(res, 500, err));
           
    }
    
};