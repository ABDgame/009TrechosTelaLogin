var soma = function(a,b){
  return a+b;
}
module.exports = soma;


var sub = function(a,b){
  return a-b;
}
module.exports = sub;


var multi = function(a,b){
  return a*b;
}
modue.exports = multi;


var div = function(a,b){
  return a/b;
}
module.exports = div;




var SomaFunc = require("./somar");
var SubFunc = require("./sub");
var MultiFunc = require("./multi");
var DivFunc = require("./div");

console.log(SomaFunc(1,2));
console.log(SubFunc(10,5));
console.log(MultiFunc(100,10));
console.log(DivFunc( ));
