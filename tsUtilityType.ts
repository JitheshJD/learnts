// Partial:Partial changes all the properties in an object to be optional.
interface Point {
    x: number;
    y: number;
}
  
  let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
  pointPart.y = 10;

  console.log(pointPart);

  //Required: Required changes all the properties in an object to be required.
  interface Car {
    make: string;
    model: string;
    mileage?: number;
  }
  
  let myCar: Required<Car> = {
    make: 'Ford',
    model: 'Focus',
    mileage: 12000 // `Required` forces mileage to be defined
  };

  console.log(myCar);

  //Record: Record is a shortcut to defining an object type with a specific key type and value type.
  const nameAgeMapVal: Record<string, number> = {
    'Alice': 21,
    'Bob': 25
  };

  console.log(nameAgeMapVal);
  
//Omit: Omit removes keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
  gender?: string;
}

const bob: Omit<Person, 'age'> = {
  name: 'Bob',
  // age: 25
  // location: 'Mysuru'
  gender: "MALE"
  // `Omit` has removed age and location from the type and they can't be defined here
};  

console.log("omit example-",bob);

//-----------------------------------------------------------------------------
//Pick: Pick removes all but the specified keys from an object type.

interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob2: Pick<Person, 'name'|'age'> = {
  name: 'Bob',
  age: 18
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

console.log("bob2-",bob2);

//---------------------------------------------------------------
//Exclude:Exclude removes types from a union.
type Primitive = string | number | boolean
const valuePrimitive: Exclude<Primitive, string> = true; // a string cannot be used here since Exclude removed it from the type.
console.log("value primitive--",valuePrimitive);
// -------------------------------------------------------------------
//return type: ReturnType extracts the return type of a function type.

type PointGenerator = () => { x: number; y: number; };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

console.log("Return Type-", point);

//--------------------------------------------------------------------
//keyof with explicit keys:When used on an object type with explicit keys, keyof creates a union type with those keys.

interface Person {
  name: string;
  age: number;
}
// `keyof Person` here creates a union type of "name" and "age", other strings will not be allowed
function printPersonProperty(person: Person, property: keyof Person) {
  console.log(`Printing person property ${property}: "${person[property]} and age is ${person['age']}"`);
}
let person = {
  name: "Max",
  age: 27
};
printPersonProperty(person, "name");
