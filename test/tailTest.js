const tail = require('../tail.js');
const assert = require('chai').assert;

describe("#tail", () => {
  it('returns ["lighthouse", "labs"] from array ["hello", "lighthouse", "labs"]', () => {
    assert.deepEqual(tail(["hello", "lighthouse", "labs"]), ["lighthouse", "labs"]);
  })
})



// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); 