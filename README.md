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
* `assertEqual(actual,expected)`: compares the `actual` value of to the `expected` and logs the result to the console
* `assertObjectsEqual(actual,expected)`: compares the `actual` value of an object to the `expected` value of an object and logs the result to the console
* `countLetter(string)`: takes in a `string` and returns an object with the keys each being a letter that is encountered in the `string` and the value of each said key being the number of times that letter is encountered in the string
* `countOnly(arrayOfValues, objectOfItemsToCount)`: returns an object that has the number of times each key of `objectOfItemsToCount` is encountered in `arrayOfValues`
* `eqArrays(array1, array2)`: returns `true` if `array1` is found equal to `array2`, otherwise returns `false`
* `eqObjects(object1, object2)`: returns `true` if `object1` has the same keys and values as `object2`, otherwise returns `false`
* `findKey(object, callback)`: returns the first item within an `object` which returns true when tested against the `callback` function
* `findKeyByValue(objectToScan, valueToUse)` : Takes an `object` and a specified `value`, and returns the first key within the `object` that has this specified `value`.
* `flatten(toFlatten)`: Takes a nested array and returns an array with one layer.
* `map(array, callback)`: Takes an array and a callback function. The callback function applies an action to each element of the array, and returns a new array with the results.
* `takeUntil(array, callback)` : receives `array` and `callback` function. The callback function will assess each value within the inputed array until callback(value) returns true. takeUntil will then a return a new array, containing all of the inputed values up until that value.
* `without(source, itemsToRemove)`: takes a `source` array and a `itemsToRemove` array, and removes the values within `itemsToRemove` from the `source` array