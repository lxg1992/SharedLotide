const assertArraysEqual = require('../assertArraysEqual.js');
const middle = require('../middle.js');


let first = [1,2,3];
let second = [1,2,3];
let third = [1,2,'3'];

console.log("assertArraysEqual() test")
assertArraysEqual([1,2],[1,2]);

assertArraysEqual(first, second);
assertArraysEqual(second, third);

console.log("Middle() test")
assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);

