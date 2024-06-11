const math = require("./mathop")
let x = math.square(2);
console.log(x);
x= math.cube(3);
console.log(x)
let m = math.arymax([12,22,14,150,14]);
console.log("max element in ary is "+ m);