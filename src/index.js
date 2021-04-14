// TODO: Add the odd numbers within an array. Handle invalid input.

function isNumber(arr) {	 // Checks array for invalid data types
	for(let i = 0; i < arr.length; i++) {
		if (typeof(arr[i]) === String) return false;
		else if (isNaN(arr[i])) return false;
		console.log('false')
	}
	return true;
}

function isOdd(arr) { 		// Returns false if the array contains any strings or even numbers
	for(let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			return false;
		}
	}
	return true;
}

function addOdd(arr) {  
    return arr.reduce((a, b) => a + b, 0);
}
let input = [1, 3, 5, '1'];

if (isNumber(input) && isOdd(input)) { // If data validation functions return true, invoke 'addOdd' function which adds the values contained in 'input' array.
	console.log(addOdd(input));
}
else console.log("Please input odd numbers.");
