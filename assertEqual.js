const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assert succeeded: ${actual} = ${expected}`);
  } else {
    console.log(`Assert failed: ${actual} != ${expected}`);
  }
};





module.exports = assertEqual;