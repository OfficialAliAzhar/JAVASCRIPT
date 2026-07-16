let socre = "33abc"

console.log(typeof socre);
console.log(typeof (socre));

let valueInNumber = Number(socre)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// "33" => 33
// 33abc => NaN 
// ture => 1 ; false => 0


let isloggedin = 1

let booleanIsloggedin = Boolean(isloggedin)
console.log(booleanIsloggedin);


// 1 =>true ; 0=> false 
// "" => false
// "koi name likha to " => true 



let somenumber = 33

let stringnumber = String(somenumber)   
console.log(stringnumber);
console.log(typeof stringnumber);


//************operations ********//

let value = 3

let negvalue = -value
console.log(negvalue);
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2/3)
console.log(2%3)

let str1 = "hello"
let str2 = "Ali"
let str3 = str1 + str2  

// console.log (str3);
// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);

console.log(+true); 
console.log(+""); 

let num1 , num2, num3
num1 = num2 =  num3 = 2 + 2 

let gameCounter = 100
gameCounter++;
console.log (gameCounter);
