const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assert succeeded: ${actual} = ${expected}`);
  } else {
    console.log(`Assert failed: ${actual} != ${expected}`);
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

// const eqObjects = function(obj1, obj2) {
//   let obj1k = Object.keys(obj1);
//   let obj2k = Object.keys(obj2);
//   if (obj1k.length !== obj2k.length) {
//     return false;
//   } else {
//     for (const item of obj1k) {
//       if (Array.isArray(obj1[item]) && Array.isArray(obj2[item])) {
//         if (!eqArrays(obj1[item],obj2[item])) {
//           return false;
//         }
//       } else {
//         if (obj1[item] !== obj2[item]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   }
// };

const eqObjects = function(obj1, obj2) {
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
      } else if(typeof(obj1[item]) === 'object' && !Array.isArray(obj1[item])&& typeof(obj2[item]) === 'object' && !Array.isArray(obj2[item])){
        return eqObjects(obj1[item],obj2[item]);
      } else {
        if (obj1[item] !== obj2[item]) {
          return false;
        }
      }
    }
    return true;
  }
};

assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),true) // => true
assertEqual(eqObjects({ a: { z: 1 }, b: 2,c:{d:{e:0,f:5}} }, { a: { z: 1 }, b: 2,c:{d:{e:0,g:4}} }),true) // => true

assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }),false) // => false
assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }),false) // => false






// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc),false);// => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc),true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false