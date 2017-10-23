'use strict';

const fs = require('fs-extra');

class Storage { 
    
    constructor (db) {
        
        this.databaseFile = db;
        
        fs.pathExists(this.databaseFile)
            .then( exists => ! exists && fs.outputJson(this.databaseFile, {}) );

    }
  
    getItems() {
        
        return fs.readJson(this.databaseFile);
        
    }
    
    getItem(id) {
        
        return new Promise( (resolve, reject) => {
            
            if( !id ) { reject("No ID Provided"); }
           
            this.getItems()
                .then( data => {
                    if ( data[id] ) { resolve(data[id]); }
                    else { reject("ID Not Found"); }
                })
                .catch( err => reject(err) );
            
        });
    }
    
    saveItem(item) {
    
        return new Promise( (resolve,reject) => {
            
            this.getItems()
                .then( data => {
                    data[item.id] = item;
                    fs.outputJson(this.databaseFile, data)
                      .then( () => resolve(item) )
                      .catch( err => reject(err) );
                })
                .catch( err => reject(err) );
                
        });
    }
    
    deleteItem (id) {
        
        return new Promise( (resolve, reject) => {
            
            if( !id ) { reject("No ID Provided"); }
           
            this.getItems()
                .then( data => {
                    if( data[id] ) {
                        delete data[id];
                        fs.outputJson(this.databaseFile, data)
                          .then( () => resolve(true) )
                          .catch( err => reject(err) );
                    }
                    else {
                        reject("Invalid ID");
                    }
                })
                .catch( err => reject(err) );
            
        });
        
    }

}

module.exports = (db) => { return new Storage(db); };