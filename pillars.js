// Functions are first class citizens in JS

// 1) They can be assigned to variables or properties
var stuff = function () {};

// 2) We can pass functions as arguments
function a(fn) {
  fn();
}

a(function () {
  console.log("Hi there");
});

// 3) We can return functions as values from another function
function b() {
  return function c() {
    console.log("Bye");
  };
}

b()();
var d = b();
d();

// Closures

// Memory efficient

function heavyDuty(index) {
  const bigArray = new Array(7000).fill("A");
  console.log("Created!");
  return bigArray[index];
}

heavyDuty(688);
heavyDuty(688);
heavyDuty(688);

function heavyDuty2() {
  const bigArray = new Array(7000).fill("A");
  console.log("Created again!");
  return function (index) {
    bigArray[index];
  };
}

const getHeavyDuty = heavyDuty2();
getHeavyDuty(700);
getHeavyDuty(688);
getHeavyDuty(688);

// Encapsulation

const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => "Booom";
  setInterval(passTime, 1000);
  return {
    launch,
    totalPeaceTime,
  };
};

// const ohno = makeNuclearButton();
// console.log(ohno.launch());

// Exercises

let view;
function initialize() {
  let called = 0;
  return function () {
    if (called > 0) {
      return "Already set";
    } else {
      view = "view";
      return "view has been set";
    }
  };
}

const initOnce = initialize();
console.log(initOnce());
console.log(initOnce());
console.log(view);

const array = [1, 2, 3, 4];
// for (var i = 0; i < array.length; i++) {
//   (function (closureI) {
//     setTimeout(function () {
//       console.log("I am at index " + closureI);
//     }, 3000);
//   })(i);
// }

// Prototypal inheritance

// __proto__ should never be used

// Every function has a prototype property

Date.prototype.lastYear = function () {
  return this.getFullYear() - 1;
};
console.log(new Date("1900-10-10").lastYear());

Array.prototype.map = function () {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(this[i] + "map");
  }
  return arr;
};

console.log([1, 2, 3].map());
