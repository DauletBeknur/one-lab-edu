// ES6 Array methods 
// 1. method Array.from()
let arr1 = Array.from("value");
console.log(arr1);

let arr2 = Array.from({length: 7},(a,b)=>b);
console.log(arr2);

let set = new Set(["this", "is", "a", "just", "example"]);
console.log(Array.from(set));

let map = new Map([["soul", undefined], [7, "dwarfs"], [NaN, 3]]);
console.log(Array.from(map));


// 2. method Array.of()
console.log(Array.of(9, 11, 7, 13, 21));
console.log(Array.of("hey", undefined, 4));


// 3. method Array.copyWithin()
let c = ["this", "is", "a", "copyWithin", "method"].copyWithin(0,3);
console.log(c);

console.log([5,4,3,2,1].copyWithin(0, -3,-1));


// 4. method Array.fill()
console.log([0,1,2,3,4].fill("ha"));
console.log([NaN, NaN, NaN].fill("barma", 1, 2));
console.log([7,7,7,7,7,7,7].fill(3, -3));


// 5. method Array.find()
let found = [4, 8, 2, 7, 56, 60].find((elem)=> elem % 7 == 0);
console.log("elem is " + found);


// 6. method Array.findIndex()
console.log(["I", "went", "to", "the", "course"].findIndex(elem => elem.length>4));


// 7. method Array.keys()
let key = [1,"two",3,"four"].keys();
console.log("array's key: " +[...key]);


// 8. method Array.entries()
let entries = ["one", undefined, NaN].entries();
console.log([...entries]);


// 9. method Array.values()
let values = ["just", "a", "number", 5].values();
console.log("array values: " + [...values]);


// The newest methods
// method Array.includes()
console.log(["cola", "pepsi", "fanta", "sprite"].includes("fanta"));
console.log(["cola", "pepsi", "fanta", "sprite"].includes("fuse"));