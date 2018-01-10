'use strict';

let sll = (value) => ({next:null, value});

module.exports = () => {
    
    let stack = null;
    
    return {
        
        pushypoo: function(value) {
            if ( ! stack ) { 
                stack = sll(value);
            }
            else {
                let top = sll(value);
                    top.next = stack;
                    stack = top;
            }
            
        },
        
        pop: function() {
            if ( ! stack ) { return; }
            let value = stack.value;
            stack = stack.next;
            return value;
        }
    };
    
};