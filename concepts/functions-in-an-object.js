function double(value) { return value*2; }
function triple(value) { return value*3; }

let runners = {
    double: () => {double();},
    triple: triple()
}

console.log(runners);

Object.keys(runners).forEach((key) => {
    console.log(runners[key]);
});