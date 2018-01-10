/*
*/


'use strict';

class Storage { 
    
    constructor (db) {
        this.init();
    }
    
    init() { 
        this.data = {};
    }
  
    getItems() {
        
        return Promise.resolve(this.data);
        
    }
    
    getItem(id) {
        
        if( !id ) { return Promise.reject("No ID Provided"); }
        
        if ( this.data[id] ) { 
            return Promise.resolve( this.data[id] );
        }
        
        else { 
            return Promise.reject("ID Not Found");
        }
        
    }
    
    saveItem(item) {
        
        if ( item ) {
            
            if ( item.id ) { 
                this.data[item.id] = item;
                return Promise.resolve(item);
            }
            else {
                return Promise.reject("Invalid ID");
            }
        }
        
        else { 
            return Promise.reject(new Error("Nothing to save"));
        }
        
    }
    
    deleteItem (id) {
        
        if( !id ) { return Promise.reject("No ID Provided"); }
        
        if ( this.data[id] ) { 
            delete this.data[id];
            return Promise.resolve(true);
        }
        else { 
            return Promise.reject("ID Not Found");
        }
        
    }

}

module.exports = (db) => { return new Storage(db); };