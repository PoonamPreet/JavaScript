let num=Number("123")//type conversion of string 123 to number

console.log(num,typeof num)

let x=8

console.log(x,typeof x)

x=x+""

console.log(x,typeof x)//type coercion will happen

console.log(x=x-2,typeof x)

x=!x

console.log(x,typeof x)//boolean value

console.log(Boolean(5))//Boolean for all numbers except 0 is true 

console.log(Boolean(0))


console.log(Boolean(null))//will return false 

console.log(Boolean('Poonam'))//Will return true


let y="Poonam 123"

console.log(y)

console.log(parseInt(y))//Trying to convert string to int which will return NaN(Not a number) value