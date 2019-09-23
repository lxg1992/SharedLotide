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

const eqObjects = function(obj1, obj2) {
  if (!(typeof obj1 === 'object' && typeof obj2 === 'object')) {
    return false;
  }
  let obj1k = Object.keys(obj1);
  let obj2k = Object.keys(obj2);
  if (obj1k.length !== obj2k.length) {
    return false;
  } else {
    for (const item of obj1k) {
      if (Array.isArray(obj1[item]) && Array.isArray(obj2[item])) {
        if (!eqArrays(obj1[item],obj2[item])) {
          return false;
        }
      } else {
        if (obj1[item] !== obj2[item]) {
          return false;
        }
      }
    }
    return true;
  }
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

const assertObjectsEqual = function(obj1, obj2) {
  const inspect = require('util').inspect;
  if (!(typeof obj1 === 'object' && typeof obj2 === 'object')) {
    return false;
  }
  let obj1k = Object.keys(obj1);
  let obj2k = Object.keys(obj2);
  if (obj1k.length !== obj2k.length) {
    console.log(`Assertion Failed: Object 1 has ${obj1k.length} keys and Object 2 has ${obj2k.length} keys`);
    return;
  } else {
    for (const item of obj1k) {
      if (Array.isArray(obj1[item]) && Array.isArray(obj2[item])) {
        if (!eqArrays(obj1[item],obj2[item])) {
          console.log(`Assertion Failed: Array of Object 1's ${item} is not equal to Array of Object 2's ${item} `);
          return;
        }
      } else {
        if (obj1[item] !== obj2[item]) {
          console.log(`Assertion Failed: Differences between values - ${obj1[item]} != ${obj2[item]}`);
          return;
        }
      }
    }
    console.log(`Assertion Passed: ${inspect(obj1)} === ${inspect(obj2)}`);
    return;
  }
};

obj1 = {
  a: "1",
  b: "2"
};

obj2 = {
  b: "2",
  a: "1"
};

obj3 = {
  a: "1",
  b: "2",
  c: "3"
};

obj4 = {
  a: [1,2,3],
  b: "4"
};

obj5 = {
  a: [1,2,3],
  b: "5"
};

obj6 = {
  b: "5",
  a: [1,2,3]
};

obj7 = {
  b: "5",
  a: [1,2,3,4]
};

assertObjectsEqual(obj1,obj2);
assertObjectsEqual(obj1,obj3);
assertObjectsEqual(obj5,obj6);
assertObjectsEqual(obj6,obj7);
