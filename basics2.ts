//------------------------------------------------
//variable declaration
//------------------------------------------------

let cname: string = "Jithesh J"; //cname should always be of type string
console.log(cname);

//----------------------------------------------------------
let tstatus:boolean = true;//force tstatus should always be of type boolean

//-----------------------------------------------------------
let tnumber:number; //force tnumber should always be numebr

tnumber = 7;
//-------------------------------------------------------------

let odata: object = {name: "Jithesh", empID: "DB378"};
console.log(odata);

//--------------------------------------------------------------

//any disables type checking
let v: any = true;
v = "string"; // no error as it can be "any" type
Math.round(v); // no error as it can be "any" type
//--------------------------------------------------------------

//prevent unknown types from being used
let w: unknown = 1;
w = "string"; // no error
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void}
// How can we avoid the error for the code commented out below when we don't know the type?
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if(typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod();
}

//---------------------------------------------------------------
//never effectively throws an error whenever it is defined.
let x: never; // Error: Type 'boolean' is not assignable to type 'never'.


//-------------------------------------------------------------------
//undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let y: undefined = undefined;
let z: null = null;

//------------------------------------------------------------------
// -----------------------------------------------------------------
//Typescript Array
//-----------------------------------------------------------------
//-----------------------------------------------------------------
console.log("-------------------------------------------------------------");

const names: string[] = [];
names.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(names);

const numArr: number[] = [];
numArr.push(919,818);
console.log("Number array---",numArr);


//-------------------------------------------------------------------
const ro_names: readonly string[] = ["Dylan2"];
// ro_names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log(ro_names);

//----------------------------------------------------------------------
//Type Inference:TypeScript can infer the type of an array if it has values.
//----------------------------------------------------------------------
const inf_numbers = [1, 2, 3]; // inferred to type number[]
inf_numbers.push(4); // no error
// comment line below out to see the successful assignment
// inf_numbers.push("5"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
let head: number[] = inf_numbers; // no error
console.log("inf_number-", inf_numbers);
console.log("\n head-", head);


