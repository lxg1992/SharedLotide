const takeUntil = function(array, callback) {
  let arr = [];
  for (const item of array) {
    if (callback(item)) {
      return arr;
    }
    arr.push(item);
  }
  return arr;
};



const assertArraysEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) {
    let isComparable = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        isComparable = false;
      }
    }
    if (isComparable) {
      console.log(`Assert succeeded: ${actual} = ${expected}`);
      
    } else {
      console.log(`Assert failed: ${actual} != ${expected}`);
      
    }
  }
};

assertArraysEqual([1,2,0,-1], takeUntil([1,2,0,-1,3,4], (x) => x > 2));
module.exports = takeUntil;