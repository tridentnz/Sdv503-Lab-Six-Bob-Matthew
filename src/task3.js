// Declared variables with numerical values.

let rating = {
    likes: 10,
    dislikes: 5
}

// Declared a function that passes the variables as parameters then subtracts one from the other.

function calcLikes(likes, dislikes) {
    return likes - dislikes
}

// A variable that returns the function as an answer.

let answer = calcLikes(rating.likes, rating.dislikes)

// Printing the result.

console.log(answer)
