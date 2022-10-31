let word = "racecar"

let original = [];
let reverse = '';

for (let i=0; i<word.length; i++) {
    original.push(word[i])
}

console.log(original);
for(let i=0; i<word.length; i++) {
    reverse += original.pop()
    // console.log(original);
}

// console.log(original);
console.log(reverse);
if(word === reverse) {
    console.log(`${word} is palindrome`);
} else {
    console.log(`${word} is not a palindrome`);
}