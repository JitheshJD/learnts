interface Rectangle {
    height: number,
    width: number
}

interface ColoredRectangle extends Rectangle {
    color: string
}

const rectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "blue"
};

console.log(rectangle);

//Paramater
function divide(dividend:number, divisor:number) {
    return dividend / divisor;
}

let divideRes:number = divide(100, 5); //this also can be written as bellow

// function divide({ dividend, divisor }: { dividend: number, divisor: number }) {
//     return dividend / divisor;
// }

// let divideRes = divide({dividend:100, divisor: 5});
// console.log(divideRes);
