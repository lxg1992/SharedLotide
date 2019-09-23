const assertArraysEqual = require('../assertArraysEqual.js');

assertArraysEqual([1,2],[1,2]);

let first = [1,2,3];
let second = [1,2,3];
let third = [1,2,'3'];

assertArraysEqual(first, second);
assertArraysEqual(second, third);