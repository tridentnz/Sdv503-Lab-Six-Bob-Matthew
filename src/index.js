// TODO: Add the odd numbers within an array. Handle invalid input.

function isNumber(arr) { // Checks array for invalid data types
	for(let i = 0; i < arr.length; i++) {
		if (isNaN(arr[i])) return false;
	}
	return true;
}

function isOdd(arr) { // Returns false if the array contains any strings or even numbers
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			console.log("isOdd false");
			return false;
		}
	}
	console.log("isOdd true");
	return true;
}

function addOdd(arr) {	// Adds values within the array
	return arr.reduce(reducer);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;

let input = [1, 3, 5, 11];

if (isNumber(input) && isOdd(input)) { // If data validation functions return true, invoke 'addOdd' function which adds the values contained in 'input' array.
	console.log(addOdd(input));
}
else console.log("Please input odd numbers.");
