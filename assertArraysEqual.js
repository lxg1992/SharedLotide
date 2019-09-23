const eqArrays = require('./eqArrays.js')

const assertArraysEqual = function(array1, array2) {

  if (eqArrays(array1,array2)) {
    console.log('✅ Assertion Passed : First Array === Second Array');
  } else {
    console.log('🛑 Assertion Failed : First Array !== Second Array');
  }
};


module.exports = assertArraysEqual;
