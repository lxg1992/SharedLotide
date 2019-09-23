# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by [Alex](https://github.com/lxg1992) and [Duncan](https://github.com/duncan-mann) as part of our learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @lxg1992/SharedLotide`

**Require it:**

`const _ = require('@lxg1992/SharedLotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: returns the first element of an `array`
* `tail(array)`: returns the `array` without the first element
* `middle(array)`: if `array` has even number of elements, returns an array of two middle numbers, otherwise if array has odd number of elements, returns an array of a middle number
* `assertArraysEqual(actual,expected)`: compares the `actual` value of an array to the `expected` value of an array and logs the result to the console
* `assertObjectsEqual(actual,expected)`: compares the `actual` value of an object to the `expected` value of an object and logs the result to the console
* `countLetter(string)`: takes in a `string` and returns an object with the keys each being a letter that is encountered in the `string` and the value of each said key being the number of times that letter is encountered in the string
* `countOnly(arrayOfValues, objectOf)`: description
* `function3(...)`: description
* `function3(...)`: description
* `function3(...)`: description
* `function3(...)`: description
* `function3(...)`: description
* `function3(...)`: description
* `function3(...)`: description
* `function3(...)`: description
* `function3(...)`: description