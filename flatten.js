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

const flatten = function(toFlatten) {
  let returnArray = [];
  for (let item of toFlatten) {
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        returnArray.push(item[j]);
      }
    } else {
      returnArray.push(item);
    }
  }
  return returnArray;
};

console.log(flatten([1,2,3,[4,5],6,[7,8],[9,10]]));