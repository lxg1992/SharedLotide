const {tail, assertEqual} = require('../tail.js');


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);