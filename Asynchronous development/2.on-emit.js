/**
 * 2. 发布-订阅模式
 */
const fs = require('fs');

function Event() { 
  this.events = [];
}

Event.prototype.on = function(fn) {
  this.events.push(fn);
}


Event.prototype.emit = function(data) {
  this.events.forEach(function(fn) {
    fn(data);
  })
}


let e = new Event();
let arr = [];
e.on(function(data) {
  arr.push(data);
  if (arr.length === 2) {
    console.log(arr);
  }
})

fs.readFile('./Asynchronous development/name.txt', 'utf8', function (err, data) {
  e.emit(data);
})
fs.readFile('./Asynchronous development/age.txt', 'utf8', function (err, data) {
  e.emit(data);
})