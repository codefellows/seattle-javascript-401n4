'use strict';


let arithmetic = module.exports = {};

arithmetic.add = function(a,b) { 
    
    return validArguments(a,b) ? a+b : null;
    
};

arithmetic.subtract = function (a,b) { 
    
    return validArguments(a,b) ? a-b : null;
    
}


// Private Methods (helper functions)

function validArguments(...args) {
    
    return (args.length >= 2 && allValuesNumeric(args)) || false;
    
}

function allValuesNumeric(args) { 
    return args.every(isNumeric);
}

function isNumeric(element, index, array) { 
  return typeof element == "number";
} 
