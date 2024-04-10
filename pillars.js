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
