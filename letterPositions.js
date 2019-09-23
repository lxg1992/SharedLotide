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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    console.log(i, sentence[i]);
    if (sentence[i].match(/\w/)) {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
    
  }
  console.log(results);
  return results;
};


assertArraysEqual(letterPositions("hello").e,[1]);