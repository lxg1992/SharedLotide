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

const without = function(source, itemsToRemove) {
  let returnArray = [...source];
  for (let i = 0; i < returnArray.length; i++) {
    console.log("Current i value: ", returnArray[i]);
    for (let j = 0; j < itemsToRemove.length; j++) {
      console.log("  Current j value: ", itemsToRemove[j]);
      if (returnArray[i] === itemsToRemove[j]) {
        returnArray.splice(i,1);
        i--;
      }
    }
    console.log("     Array value is: ", returnArray);
  }
  return returnArray;
};


let baseArray = [1,2,3,4,5];

console.log("Final result: ", without(baseArray,[2,4]));

assertArraysEqual(baseArray,[1,2,3,4,5]);