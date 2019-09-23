const eqArrays = require('../eqArrays');
const assertEqual = require("../assertEqual.js");

eqArrays([1,2],[1,2]);
eqArrays(["1",2],["1","2"]);


assertEqual(eqArrays([1,2],[1,2]),true);
assertEqual(eqArrays([1,2],['1',2]),true);