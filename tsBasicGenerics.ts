//Generic functions

function createPair_1<S>(v1: S): S {
    return v1;
}

console.log("1. create pair",createPair_1<string>('hello'));

function createPair<S, N>(v1: S, v2: N): [S, N] {
    return [v1, v2];
}

console.log("2.create pair",createPair<string, number>('hello', 10));


//Generic Classes

class NamedValue<T> {
    private _value: T | undefined;
  
    constructor(private name: string) {}
  
    public setValue(value: T) {
      this._value = value;
    }
  
    public getValue(): T | undefined {
      return this._value;
    }
  
    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }
  
  let value = new NamedValue<number>('myNumber');
  value.setValue(15);
  console.log(value.toString());

  //Type aliases
  type Wrapped<T> = { value: T };
  const wrappedValue: Wrapped<number> = { value: 10 };
  console.log("wrapped Value-", wrappedValue.value);

//extends:Constraints can be added to generics to limit what's allowed. The constraints make it possible to rely on a more specific type when using the generic type
function createLoggedPair<S extends string | number, T extends string | number>(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
   
    return [v1,v2];
}

var logedPairVal = createLoggedPair("testing", "testlog");
var logedPairVal2 = createLoggedPair(1991, "Jithesh");
console.log("loged Pair values - ", logedPairVal);
console.log("loged Pair values2 - ", logedPairVal2);

function createLoggedPair2<S extends object, T extends string | number>(v3: S, v4: T): [S, T] {
    console.log(`creating pair: v1='${v3}', v2='${v4}'`);
   
    return [v3,v4];
}

console.log("logged pair 2-1---",createLoggedPair2);

  
var logedPairVal3 = createLoggedPair2({name: "Jithesh"}, 5);
var logedPairVal4 = createLoggedPair2({}, "");
