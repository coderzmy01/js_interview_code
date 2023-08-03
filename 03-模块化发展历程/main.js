// var example = require("./example")
// console.log(example.x);
// console.log(example.addX());
// main.js
var counter = require('./lib').counter;
var incCounter = require('./lib').AddCounter;

console.log(counter);  // 3
incCounter();
console.log(counter); // 3
