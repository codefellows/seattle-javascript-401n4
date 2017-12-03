import superagent from 'superagent';

class MagicSauce {

    fetchData(url) {
        
        return this.getCache(url)
            .then(data => data)
            .catch(err => {
                return superagent.get(url)
                .then(result => { 
                    this.setCache(url, result.body);
                    return result.body; 
                })
                .catch(console.log);
            })
            .then(data => data)
    }

    getCache(key) {
        
        return new Promise( (resolve,reject) => {
            let data = localStorage.getItem(key);
            if ( data ) { resolve( JSON.parse(data)); }
            else { reject("Invalid cache key", key); }
        });
        
    }
    
    setCache(key, value) {
        
        return new Promise( (resolve,reject) => {
            let safeValue = typeof value === "string" ? value : JSON.stringify(value);
            if ( localStorage.setItem(key, safeValue) ) { resolve(); }
            else { reject("Unable to cache", key); }
        });
        
    }
    
}

export default new MagicSauce();