// Browser Only //
let someObject = {};
for(let x=1; x<10000; x++) {someObject[x] = x;}

let start, end;

start = performance.now();
Object.keys(someObject).forEach(key => {
   let y = someObject[key]+1;
});
end = performance.now();
console.log("Elapsed MS (Object.keys)", end-start);

start = performance.now();
for( let key in someObject ) { 
   let y = someObject[key]+1;
}
end = performance.now();
console.log("Elapsed MS (for...in)", end-start);