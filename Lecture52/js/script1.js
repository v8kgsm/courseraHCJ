//Fake Namespaces
// var yaakovGreeter = {};
// yaakovGreeter.name = "Yaakov";
// yaakovGreeter.sayHello = function () {
//   console.log("Hello " + yaakovGreeter.name);
// }


// Immediately Invoked Function Expressions (IIFEs)


(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);
