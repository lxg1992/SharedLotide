

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



module.exports = middle;




