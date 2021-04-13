Task one
========

Task two
========
Driver Matt Navigator Bob

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

Driver Bob Navigator Matt

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

