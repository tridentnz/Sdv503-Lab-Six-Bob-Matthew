Task one
========
Navigator Matt : Driver Bob

We broke the error handling up between two functions isNumber() and isOdd() 
```
function isNumber(arr) {	 // Checks array for invalid data types
	for(let i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === String) return false;
		else if (isNaN(arr[i])) return false;
		console.log('false')
```
this function checks if the input is a number or a string by looping though an array then if any element is a string or not a number (NaN) then it returns false.

The problem we encountered was we didn't have the string checked in the first version so strings were passed and now they are not.

```
function isOdd(arr) { 		// Returns false if the array contains even numbers
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			return false;
		}
}
```
the second error handling loops through the array and checks if any number is even and if it is return false.

```
function addOdd(arr) {  
    return arr.reduce((a, b) => a + b, 0);
}
```
addOdd() Is a Ternary function that reduces an array to the sum of its parts. 
We had some trouble with the syntax of the accumulator and reducer but worked it out by working through (Array.Prototype.Reduce() - JavaScript | MDN, n.d.) reduce() MDN.

```
let input = [1, 3, 5, '1'];

if (isNumber(input) && isOdd(input)) { // If data validation functions return true, invoke 'addOdd' function which adds the values contained in 'input' array.
	console.log(addOdd(input));
}
else console.log("Please input odd numbers.");
```
This function passes the error handling functions as parameters to check the input of the array and stops invalid input.

Task two
========
Driver Matt : Navigator Bob

We declared an array with strings and numbers then worked through (Array.Prototype.Filter() - JavaScript | MDN, n.d.)

```
// An array with strings and numbers.

let arr = ['string', 'strings', 'stringify', 'numbers', 23, 24, 35, 45, 56]

// A IIFE that filters the strings out leaving only the numbers in the array.

const filterStr = arr.filter((num) => num > 0)

// Result will be 23, 24, 35, 45, 56 removing the strings.

```

I got confused by filtering by array length before realising I can make it filter by if a number is greater than 0. E.g., 
```
arr.filter(num => arr.length > 4)
```
In an attempt to return everything after the fourth index. Fixed that by removing .length.

Task three
==========

Driver Bob : Navigator Matt

We used a straightforward method by getting a like and dislike value then finding the difference using a function.
```
let likes = 10
let dislikes = 5

// Function passes the variables then subtracts one from the other.

function calcLikes(likes, dislikes) {
    return likes - dislikes
}


let answer = calcLikes(likes, dislikes)

// Returns 5
```


References
==========


Array.prototype.filter()—JavaScript | MDN. (n.d.). Retrieved 13 April 2021, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Array.prototype.reduce()—JavaScript | MDN. (n.d.). Retrieved 7 April 2021, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


