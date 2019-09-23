const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assert succeeded: ${actual} = ${expected}`);
  } else {
    console.log(`Assert failed: ${actual} != ${expected}`);
  }
};

let countLetters = function(str) {
  let result = {};
  str = str.replace(/ /g, '');
  for (const letter of str) {
    console.log(letter);
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  }
  console.log(str);
  console.log(result);
};

countLetters("lmao ok");