var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.South);
var numberobject;
(function (numberobject) {
    numberobject[numberobject["one"] = 1] = "one";
    numberobject[numberobject["two"] = 2] = "two";
    numberobject[numberobject["three"] = 3] = "three";
})(numberobject || (numberobject = {}));
var sum = numberobject.one + numberobject.two;
console.log("Sum of two number is---", sum);
