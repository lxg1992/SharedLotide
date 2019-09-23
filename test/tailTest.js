const tail = require('../tail.js');
const assert = require('chai').assert;

describe("#tail", () => {
  it('returns ["lighthouse", "labs"] from array ["hello", "lighthouse", "labs"]', () => {
    assert.strictEqual(tail([1, 2, 3]), [2,3]);
  })
})



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); 