type Cat = {
  name: string;
  whiskers: number;
  breed: string;

  TYPE: "Cat"
};

let myCat = {
  name: "Muffins",
  whiskers: 12,
  breed: "Don't care",
  TYPE: "Cat" as const
};

let someCat: Cat;

someCat = myCat;

type Dog = {
  name: string;
  obedient: boolean;

  TYPE: "Dog"
};

let catOrDog: Cat | Dog; //what is found in both NOT what we think of when we say OR

let catAndDog: Cat & Dog;

function dealWithCatOrDog1(animal: Cat | Dog) {
  if ("whiskers" in animal) { //filters based on if this in the object ***FRAGILE SOLUTION*** cuz what if more than one object has whiskers?
  }
}

function dealWithCatOrDog2(animal: Cat | Dog) { //instead of lines 32, add a "TYPE" into each Type Cat and Type Dog
  if (animal.TYPE === "Cat") {
    animal.breed
  }
  else { //this is dog now
    animal.obedient
  }
  
}

class A {
  a: string = "a"
}

class B {
  b: string = "b"
}

let x: A | B = Math.random() < .5 ? new A() : new B();

if (x instanceof A) {  //he lost me 🤷🏽‍♀️
} else {
  x.b
}


export default null;
