const middle = require('../middle.js');
const assert = require('chai').assert;

describe("#middle", () => {
  it('should get the middle of [1,2,3] to be [2]', () => {
    assert.deepEqual(middle([1,2,3]),[2])
  })

  it('should get the middle of [1,2,3,4] to be [2,3]', () => {
    assert.deepEqual(middle([1,2,3,4], [2,3]))
  })
})