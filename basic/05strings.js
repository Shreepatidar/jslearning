// const name = "hitesh"
// const repoCount = 50
// console.log(name + repoCount + " Value"); //ye use nhi krna h

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//ye shi rehta h

const gameName = new String('hitesh-hc-com')
//----------------------------------------------------------
// let a = "abcd";
// let b = new String("abcd");

// console.log(typeof a); // "string"
// console.log(typeof b); // "object"

// console.log(a == b);  // true  (values match)
// console.log(a === b); // false (types differ)

//-----------------------------------------------------------

// let name = "abcd";  // This is a string primitive.
// Type:
// typeof name; // "string"
// It’s lightweight and most commonly used.
// When you call methods (name.toUpperCase()), JavaScript temporarily wraps it with a String object internally, then discards it.

// 🔹 2. let name = new String("abcd");
// This creates a String object (wrapper), not a primitive
// Type:
// typeof name; // "object"
// It has extra object behavior (can add properties), but is slower and unnecessary in most cases.
// Rarely used in practice.

//-----------------------------------------------------------------

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

// const newString = gameName.substring(0, 4) ye neg value nhi leta he
// console.log(newString);

// const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

// const newStringOne = "   hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

// const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));