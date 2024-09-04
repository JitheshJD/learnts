//------------------------------------------------
//variable declaration
//------------------------------------------------
var cname = "Jithesh J"; //cname should always be of type string
console.log(cname);
//----------------------------------------------------------
var tstatus = true; //force tstatus should always be of type boolean
//-----------------------------------------------------------
var tnumber; //force tnumber should always be numebr
tnumber = 7;
//-------------------------------------------------------------
var odata = { name: "Jithesh", empID: "DB378" };
console.log(odata);
//--------------------------------------------------------------
//any disables type checking
var v = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
//--------------------------------------------------------------
//prevent unknown types from being used
var w = 1;
w = "string"; // no error
w = {
    runANonExistentMethod: function () {
        console.log("I think therefore I am");
    }
};
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
    w.runANonExistentMethod();
}
//---------------------------------------------------------------
//never effectively throws an error whenever it is defined.
var x; // Error: Type 'boolean' is not assignable to type 'never'.
//-------------------------------------------------------------------
//undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
var y = undefined;
var z = null;
//------------------------------------------------------------------
// -----------------------------------------------------------------
//Typescript Array
//-----------------------------------------------------------------
//-----------------------------------------------------------------
console.log("-------------------------------------------------------------");
var names = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);
var numArr = [];
numArr.push(919, 818);
console.log("Number array---", numArr);
//-------------------------------------------------------------------
var ro_names = ["Dylan2"];
// ro_names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log(ro_names);
//----------------------------------------------------------------------
//Type Inference:TypeScript can infer the type of an array if it has values.
//----------------------------------------------------------------------
var inf_numbers = [1, 2, 3]; // inferred to type number[]
inf_numbers.push(4); // no error
// comment line below out to see the successful assignment
// inf_numbers.push("5"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var head = inf_numbers; // no error
console.log("inf_number-", inf_numbers);
console.log("\n head-", head);
