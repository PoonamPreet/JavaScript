let data=8//data type is number
let user='Poonam'//Data type is string

let num1=2654646681468846146

console.log(num1*5) //max safe value 9007199254740991 for int later we need to use bigint


console.log(typeof num1)

console.log(typeof user)

num1=0xf//HexaDecimal number

console.log(typeof num1)

console.log(num1 +" here num1 is hexa number")

num1=100_00_000//instead of commas

console.log(num1)

num1=-5/0

console.log(num1)//infinite numnber

console.log(Number.MAX_VALUE*5) //Infinite number


num1=12313565313216846589656484546846565n//Bigint add n at the end to maintain the precision

console.log(num1)

//console.log(num1+2)// error will be thrown Uncaught TypeError TypeError: Cannot mix BigInt and other types, use explicit conversions

//so to make sure error isn thrown we need to add n at the end of the number we add or any operation we do

console.log(num1+2n)

