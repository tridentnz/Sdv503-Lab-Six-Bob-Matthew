Task one
========
Navigator Matt : Driver Bob

We created two functions to handle invalid input.
```
function isNumber(arr) {	 // Checks array for invalid data types
	for(let i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === String) return false;
		else if (isNaN(arr[i])) return false;
		console.log('false')
	}
	return true;
}
```
Function isNumber loops through an array. It checks each value, returning false if a string is present. If no string are present within the array, the function returns true.

A bug was present in this function. 'return true' was written inside the for loop which gave unexpected output. Once we moved it below the for loop it functioned correctly.
```
function isOdd(arr) { 		// Returns false if the array contains even numbers
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			return false;
		}
}
```
Function 'isOdd' expects an array and loops through the array, returning false if an even number is present.
```
function addOdd(arr) {  
    return arr.reduce((a, b) => a + b, 0);
}
```
Function addOdd() reduces an array by using the reduce functionality.
```
let input = [1, 3, 5, '1'];

if (isNumber(input) && isOdd(input)) { // If data validation functions return true, invoke 'addOdd' function which adds the values contained in 'input' array.
	console.log(addOdd(input));
}
else console.log("Please input odd numbers.");
```
If 'isNumber' && 'isOdd' return true there is no invalid input and addOdd(input) is called which will add the values in the array together using .reduce.

Task two
========
Driver Matt : Navigator Bob

Bob wanted me to declare an array with strings and numbers. Then we learnt how to use the (Array.Prototype.Filter() - JavaScript | MDN, n.d.)

```
// An array with strings and numbers.

let arr = ['string', 'strings', 'stringify', 'numbers', 23, 24, 35, 45, 56]

// This will filter strings out leaving only the numbers in the array.

const filterStr = arr.filter((num) => num > 0)

// The result is 23, 24, 35, 45, 56

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


Array.prototype.filter()‚ŒvaScript | MDN. (n.d.). Retrieved 13 April 2021, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Array.prototype.reduce()‚ŒvaScript | MDN. (n.d.). Retrieved 7 April 2021, from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce


