//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "deepti",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
//+++++++++++++++++++++++++++++++++++++++++++++++++++
// Stack(Primitive) Heap(Non primitive)

let myGitname ="DeeptiPandey"

let anothername = "Deepti"
console.log(myGitname);
console.log(anothername);

let userOne ={
    email: "user@googlle.com",
    upi: "user@byl"
}
let userTwo = userOne
userTwo.email = "deepti@google.com"

console.log(userOne.email);
console.log(userTwo.email);
//Reference is gained for non primitive data types so the changes we make is reflected in original data.