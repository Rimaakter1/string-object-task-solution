// Capitalize Every first Letter of each word in a String

let str = 'i am rima. i live in bangladesh';

str = str.split(" ");
console.log(str);

for (let i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    console.log(str);
}

str = str.join(" ");
console.log(str);
