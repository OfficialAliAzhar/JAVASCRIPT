//  primitive

// 7 type :  string, number, boolearn, null, undefined, symbol,
// BigInt

const socre = 100
const socreValue = 100.3

 const isloggedin =  false
 const outsideTemp = null
let userEmail;

const id = Symbol ('234')
 const anotherid = Symbol ('234')
 

console.log(id === anotherid);

const bignumber = 312654846135468468435981435498741n




// reference ( non  primitive)
// array, objective, funtion
const heros = ["batman", "supermen", "doge"]
let myobj ={
        name: "ali",
        age: 22,
}

const myfunction =  function(){
    console.log("hello woeld");

} 

// console.log( typeof bignumber);

// *******************************
// stack (primitive),heap (non primitive)


let myyoutubename = "aliazhargmail.com"

let anothername = myyoutubename
console.log(anothername);

let user = {
    email: "user@google.com",
    upi: "user@google.com"
}
