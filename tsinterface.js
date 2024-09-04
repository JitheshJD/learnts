var rectangle = {
    height: 20,
    width: 10,
    color: "blue"
};
console.log(rectangle);
//Paramater
// function divide(dividend:number, divisor:number) {
//     return dividend / divisor;
// }
// let divideRes:number = divide(100, 5);
function divide(_a) {
    var dividend = _a.dividend, divisor = _a.divisor;
    return dividend / divisor;
}
var divideRes = divide({ dividend: 100, divisor: 5 });
console.log(divideRes);
