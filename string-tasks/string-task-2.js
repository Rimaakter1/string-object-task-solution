// Count how many times a string has the letter a or A


// if (sentence.includes('a') || sentence.includes('A')) {
//     count++;
//     console.log(count)
// }

let count = 0;
const sentence = 'I am rima akter , I AM RIMA AKTER'
for (const letter of sentence) {
    if (letter === 'a' || letter === 'A') {
        count++;
    }

}
console.log(count);

