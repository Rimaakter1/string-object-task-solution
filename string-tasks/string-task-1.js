// Count how many times a string has the letter a
const sentence = 'i am rima akter';
// console.log(sentence.includes('a'));

let count = 0;
for (const letter of sentence) {
    // console.log(letter);
    if (letter === 'a') {
        count++;
    }
}
console.log(count);


