// Loop through an object and print the key-value pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

const props = Object.keys(myObject);

for (const prop of props) {
    console.log(prop, ":", myObject[prop], "|", "type:", typeof (myObject[prop]));

}