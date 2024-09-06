// Check whether a string contains all the vowels a, e, i, o, u

let vowels = 'The quick brown fox jumps over the lazy dog';
vowels = vowels.toLowerCase()


if (vowels.includes('a') && vowels.includes('e') && vowels.includes('i') && vowels.includes('o') && vowels.includes('u'))
    console.log(true);

else {
    console.log(false);
}


let str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase(); // Convert the string to lowercase to ensure case insensitivity

const vowelss = ['a', 'e', 'i', 'o', 'u'];
let containsAllVowels = true; // Assume the string contains all vowels initially

for (let vowel of vowels) {
    if (!str.includes(vowel)) {
        containsAllVowels = false; // If any vowel is not found, set to false
        break; // No need to continue checking if a vowel is missing
    }
}

console.log(containsAllVowels); // Output: true or false based on the check

