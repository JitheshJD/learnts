//Generic functions
function createPair_1(v1) {
  return v1;
}
console.log("1. create pair", createPair_1("hello"));
function createPair(v1, v2) {
  return [v1, v2];
}
console.log("2.create pair", createPair("hello", 10));
//Generic Classes
var NamedValue = /** @class */ (function () {
  function NamedValue(name) {
    this.name = name;
  }
  NamedValue.prototype.setValue = function (value) {
    this._value = value;
  };
  NamedValue.prototype.getValue = function () {
    return this._value;
  };
  NamedValue.prototype.toString = function () {
    return "".concat(this.name, ": ").concat(this._value);
  };
  return NamedValue;
})();
var value = new NamedValue("myNumber");
value.setValue(15);
console.log(value.toString());
var wrappedValue = { value: 10 };
console.log("wrapped Value-", wrappedValue.value);
//extends:Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type
function createLoggedPair(v1, v2) {
  console.log("creating pair: v1='".concat(v1, "', v2='").concat(v2, "'"));
  return [v1, v2];
}
var logedPairVal = createLoggedPair("testing", "testlog");
var logedPairVal2 = createLoggedPair(1991, "Jithesh");
console.log("loged Pair values - ", logedPairVal);
console.log("loged Pair values2 - ", logedPairVal2);
function createLoggedPair2(v3, v4) {
  console.log("creating pair: v1='".concat(v3, "', v2='").concat(v4, "'"));
  return [v3, v4];
}
console.log("logged pair 2-1---", createLoggedPair2);
var logedPairVal3 = createLoggedPair2({ name: "Jithesh" }, 5);
var logedPairVal4 = createLoggedPair2({}, "");
