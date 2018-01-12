var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
console.log("Clone", clonedObj);

var mergedObj = { ...obj1, ...obj2 };
console.log("Merged", mergedObj);

let object1 = {
    foo: "bar", 
    baz: { bing: "bop", stuff:[1,2,3] },
    sing: { 
        song:{
            title: "happy",
            artist: "someone",
            year: 1997,
            band: ["John", "Colin", "Jason"],
            vices: {
                drinking: "Heavily",
                smoking: "Profusely",
                sleeping: "No so much"
            }
        }
    }
}

let object2 = {...object1};

console.log("Deep Clone", object2);