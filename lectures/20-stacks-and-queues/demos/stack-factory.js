'use strict';

module.exports = () => {
    
    let stack = new Array();
    
    return {
        
        push: function(value) {
            stack.push(value);
        },
        
        pop: function() {
            return stack.pop();
        }
    };
    
};