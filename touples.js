//Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
// Tuples are great because they allow each element in the array to be a known type of value.
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// ourTuple.push('Coding God took a day off'); //throws error if try to push value to array
console.log(ourTuple);
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
//Named Tuples
var graph;
var a = 5;
var b = "something";
var c = "this could be any";
graph = [a, b, c];
graph.push('test push');
graph.push(25);
console.log(graph);
//destructure tuples
var num1 = graph[0], str1 = graph[1], any1 = graph[2];
var val = graph.slice(0);
console.log("num1 is", num1);
console.log("str1 is", str1);
console.log("any1 is", any1);
console.log("Destructured val", val[0], "or", graph[0]);
//--------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------
