Task one
========

Task two
========

```
// An array with strings and numbers.

let arr = ['string', 'strings', 'stringify', 'numbers', 23, 24, 35, 45, 56]

// A IIFE that filters the strings out leaving only the numbers in the array.

const filterStr = arr.filter((num) => num > 0)

// Result will be 23, 24, 35, 45, 56 removing the strings.

```

Task three
==========

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