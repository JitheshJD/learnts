var pointPart = {}; // `Partial` allows x and y to be optional
pointPart.y = 10;
console.log(pointPart);
var myCar = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
};
console.log(myCar);
//Record: Record is a shortcut to defining an object type with a specific key type and value type.
var nameAgeMapVal = {
    'Alice': 21,
    'Bob': 25
};
console.log(nameAgeMapVal);
var bob = {
    name: 'Bob',
    // age: 25
    // location: 'Mysuru'
    gender: "MALE"
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log("omit example-", bob);
var bob2 = {
    name: 'Bob',
    age: 18
    // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};
console.log("bob2-", bob2);
var valuePrimitive = true; // a string cannot be used here since Exclude removed it from the type.
console.log("value primitive--", valuePrimitive);
var point = {
    x: 10,
    y: 20
};
console.log("Return Type-", point);
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person, property) {
    console.log("Printing person property ".concat(property, ": \"").concat(person[property], " and age is ").concat(person['age'], "\""));
}
var person = {
    name: "Max",
    age: 27
};
printPersonProperty(person, "name");
