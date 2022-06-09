# fizzbuzz-kata

## Rules of FizzBuzz

For any given number:
- A multiple of 3 should be replaced with the string "Fizz"
- A multiple of 5 should be replaced with the string "Buzz"
- If a number is a multiple of both 3 and 5, it should be replaced with the string "FizzBuzz"
- Any other number should remain unchanged

## Extra Special Rules
- The rules above should work for negative numbers too.
- Any non-number should be replaced with the string "Bonk"

## Running your file

The file in this project is called `index.js`. To run this file use the command:

```sh
node index
```

To see some output from the file you will need to make sure you use `console.log` to print it out.

## Release 1

You have been provided an array (`arr1`) with the numbers 1 - 10. Create and print out a version of this array that has had the FizzBuzz rules applied to it.

```js
const arr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// [ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz" ]
```

## Release 2

You have been provided an array (`arr2`) with an assortment of numbers. Create and print out a version of this array that has had the FizzBuzz rules applied to it.

```js
const arr2 = [ 12, 22, 45, 47, 15, 63, 7 ]
// [ "Fizz", 22, "FizzBuzz", 47, "Buzz", "Fizz", 7 ]
```

## Release 3

You have been provided an array (`arr3`). Create and print out a version of this array that has had the FizzBuzz rules, including the extra special rules, applied to it.

```js
const arr3 = [ 17, -12, "hello", 5, 23, 60, -7, null, 13 ]
// [ 17, "Fizz", "Bonk", "Buzz", 23, "FizzBuzz", -7, "Bonk", 13 ]
```

## Release 4

Time to refactor! Make sure your code to 'fizzbuzz-ify the array' is contained in a function. We should be able to pass it an array, and it should return us the new array. I.e. the following code should print out the result for arr1.

```js
const result = fizzbuzz(arr1)
console.log(result)
```

Read over the code you have written so far. How could you make it more readable? Are there any different ways you could write the same functionality now that you have made it work?

## Release 5

Generate a new array.

## Release 6

Command line usability
