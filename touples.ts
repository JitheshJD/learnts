//Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// define our tuple
let ourTuple: readonly[number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// ourTuple.push('Coding God took a day off'); //throws error if try to push value to array
console.log(ourTuple);


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------

//Named Tuples
let graph: [a: number, b: string, c: any];
let a = 5;
let b = "something";
let c = "this could be any"
graph = [a,b,c]
graph.push('test push');
graph.push(25);

console.log(graph);

let __graph: [l: number, m: string];
let l = 5;
let m = "something";
__graph = [a,b]

console.log(__graph);

//destructure tuples
const [num1, str1, any1] = graph;
const [...val] = graph;

console.log("num1 is", num1);
console.log("str1 is", str1);
console.log("any1 is", any1);
console.log("Destructured val", val[0], "or", graph[0]);


//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------


