let a1='Mosh';
console.log(a1);
//to declare variables either single quotes or double quotes can be used
//variables should be meaningful
//variables cannot be a reserved key word
//they cannot start with numbers and symbols
//they cannot contain space or hyphen
//they should be in camel case
//they are cnode index.js
//case sensitive
//mutliple variable can be declared by using comma but to intiatilise them u may need to divide them 
const interestRate=0.3;
//interestRate=1;
console.log(interestRate);
//here we will get an error as it is constant we r reassigining the value 
//for this we need to make sure we keep either the value constant or use keyword let to reassign the value
let interest=1;
interest=5;
console.log(interest);
//Two types of variable declarations are available Primitives/value types and reference types
//Primitives---Strings Number Boolean undefined and null are available in Primitives
//String
let name='Poonam';//string literal
let age=30;//number literal
let isApproved=true;//boolean literal
let firstName=undefined;//or we can write like this too let firstName;
let lastName=null;//we can re assign the value
//Two typesof Programming languages static and dynamic languages
//Reference Types --object,Array,Function
let person=
{
    name:'Poonam',
    age:30
};
//dot notation(consice and shorter)
person.name='John';


//Bracket Notation(two ways)
//first way
let selection ='name';
person[selection]='maria';

//second way
//person['name']="Mary";

console.log(person);

let selectedColors =['red','blue'];//array literal
selectedColors[2]='green';
console.log(selectedColors);
console.log(selectedColors.length);


console.log(selectedColors[0]);



//Functions

function greet(name){
    console.log('Hello Java ' +name); 
}

greet('Shona');

//Performing a task
function greeting(name,lastName){
    console.log('hello ' +name +' '+lastName)
}

greeting('Poonam','Bagchandani');


//calculates a value
function square(number)
{
    return number*number;
}

console.log(square(2));

