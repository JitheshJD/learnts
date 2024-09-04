var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
//-----------------------------------------
//index signature
//-----------------------------------------
var nameAgeMap = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = 28; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);
