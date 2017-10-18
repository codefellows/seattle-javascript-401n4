let numbers = [3,1,5,7,2,12,6];

let getHighest = function(numbers) {
    
  let highest = false;
  
  if ( Array.isArray(numbers) ) { 
  
      highest = numbers[0];
      
      for(let i=0; i<=numbers.length; i++) {
          highest = numbers[i] > highest  ? numbers[i] : highest;
      }
  
  }
  
  return highest;
  
};


let getLowest = function(numbers) {
  
  let lowest = false;
  
  if ( Array.isArray(numbers) ) { 
      
      lowest = numbers[0];
      
      for(let i=0; i<=numbers.length; i++) {
          lowest = numbers[i] < lowest  ? numbers[i] : lowest;
      }
      
  }
  return lowest;
  
};

console.log("Highest", getHighest(numbers) );
console.log("Lowest", getLowest(numbers) );