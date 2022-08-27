
const isStudent = true;

if (isStudent === true) {
    console.log("He is a student");
}

else {
    console.log("He is not a student");
}

// ternary operator
const sentence = (isStudent === true) ? "he is a student" : "he is not a student";
console.log(sentence);


const isFriend = false;

if (isFriend === true) {
    console.log("he is my friend");
}

else {
    console.log("he is not my friend");
}

// ternary version
const makeEasy = (isFriend === true) ? "he is my friend" : "he is not my friend";
console.log(makeEasy);


// Note : Normally ternary operator use for boolean data types.