import superagent from 'superagent';

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
}

export const getCache = (key) => {
        
    return new Promise( (resolve,reject) => {
        let data = localStorage.getItem(key);
        if ( data ) { resolve( JSON.parse(data)); }
        else { reject("Invalid cache key", key); }
    });
    
}
    
export const setCache = (key, value) => {
        
    return new Promise( (resolve,reject) => {
        let safeValue = typeof value === "string" ? value : JSON.stringify(value);
        localStorage.setItem(key, safeValue);
        resolve();
    });
    
}