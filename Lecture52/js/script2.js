//Fake Namespaces
// var johnGreeter = {};
// johnGreeter.name = "John";
// johnGreeter.sayHi = function () {
//   console.log("Hi " + johnGreeter.name);
// }

// Immediately Invoked Function Expressions (IIFEs)


(function (window) {
  var johnGreeter = {};
  johnGreeter.name = "John";
  var greeting = "Hi ";
  johnGreeter.sayHi = function () {
    console.log(greeting + johnGreeter.name);
  }

  window.johnGreeter = johnGreeter;

})(window);
