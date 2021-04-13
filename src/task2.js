// Declared a variable initialised with an array.

let arr = ['string', 'strings', 'stringify', 'numbers', 23, 24, 35, 45, 56]

/* Declared a variable with an immediately invoked function expression 
   that takes the array and filters the results on if they are greater than 0
   strings are not numbers so they are filtered from the results.
*/

const filterStr = arr.filter((num) => num > 0)

// Printing the result as it is a variable.

  console.log(filterStr)

