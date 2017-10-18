let numbers = [3,1,5,7,2,12,6];

let getHighest = function(numbers) {
  return Array.isArray(numbers) && Math.max(...numbers);
};


let getLowest = function(numbers) {
  return Array.isArray(numbers) && Math.min(...numbers);
};

console.log("Highest", getHighest(numbers) );
console.log("Lowest", getLowest(numbers) );