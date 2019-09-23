const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assert succeeded: ${actual} = ${expected}`);
  } else {
    console.log(`Assert failed: ${actual} != ${expected}`);
  }
};

const obj = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const findKey = function(object, callback) {
  for (let item in object) {
    if (callback(object[item])) {
      
      return item;
    }
    console.log(item);
  }
};

assertEqual(findKey(obj, (x) => x.stars === 3),'Akaleri');

