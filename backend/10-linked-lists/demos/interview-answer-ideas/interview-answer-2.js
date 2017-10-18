let numbers = [3,1,5,7,2,12,6];

let getTheRightNumber = function(type, numbers) {
  
  var operators = {
    'highest': function(a, b) { return a > b ? a : b },
    'lowest': function(a, b) { return a < b ? a : b }
  };
  
  let operator = operators[type] || false;

  let number = (operator && Array.isArray(numbers)) ? numbers[0] : false;

  if ( number && operator ) {
      number = numbers[0];
      
      for(let i=0; i<=numbers.length; i++) {
          number = operator(numbers[i], number) 
      }
  
  }
  
  return number;
  
};

let getHighest = (numbers) => getTheRightNumber("highest", numbers);
let getLowest = (numbers) => getTheRightNumber("lowest", numbers);


console.log("Highest", getHighest(numbers) );
console.log("Lowest", getLowest(numbers) );
