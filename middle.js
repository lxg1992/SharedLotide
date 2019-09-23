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

const eqArrays = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected) && actual.length === expected.length) {
    let isComparable = true;
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        isComparable = false;
      }
    }
    if (isComparable) {
      return true;
    } else {
      return false;
    }
  }
};

const middle = function(arrayInput) {
  let num = 0;
  if (arrayInput.length <= 2) {
    return [];
  } else {
    num = Math.floor(arrayInput.length / 2);
    if (arrayInput.length % 2 === 0) {
      return [arrayInput[num - 1],arrayInput[num]];
    } else {
      return [arrayInput[num]];
    }
  }
};

console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5]));
console.log(middle([1,2,3,4,5,6]));

assertArraysEqual(middle([1,2,3]),[2]);
assertArraysEqual(middle([1,2,3,4]),[2,3]);
assertArraysEqual(middle([1,2,3,4,5]),[3]);


