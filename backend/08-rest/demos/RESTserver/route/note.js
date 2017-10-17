'use strict';

const Note = require('../model/note.js');
const router = require('../lib/router.js');

let notes = {};

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
}

router.post('/api/notes', (req,res) => {
    
    if ( ! req.body.title ) { 
        return sendStatus(res, 400, "Missing Title");
    }
    if ( ! req.body.content ) { 
        return sendStatus(res, 400, "Missing Content");
    }
    
    let note = new Note(req.body);
    notes[note.id] = note;
    
    sendJSON(res, 201, note);
    
});


router.get('/api/notes', (req,res) => {
    
    let id = req.url && req.url.query && req.url.query.id;
    
    if ( id ) { 
        if ( notes[id] ) { 
            sendJSON(res, 200, notes[id]);
        }
        else { 
            sendStatus(res, 404, "Note Not Found");
        }
    }
    else {
        let allNotes = {notes:notes};
        sendJSON(res, 200, allNotes);
    }
});

router.delete('/api/notes', (req,res) => {
    
    let id = req.url && req.url.query && req.url.query.id;
    
    if ( id  ) { 
        if ( notes[id] ) { 
            delete notes[id];
            sendJSON(res, 200, notes[id]);
        }
        else { 
            sendStatus(res, 404, "Note Not Found");
        }
    }
    else { 
        sendStatus(res, 400, "Note ID Required");
    }
});