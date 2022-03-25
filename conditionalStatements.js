let x=5;
let y=5;
let z=9;
if(x%2==0&&y%2==0&&z%2==0)//to compare same data types otherwise it will get coerced in java script
{

    console.log("All are even")
}
   else if(x%2==0||y%2==0||z%2==0){
    console.log("Few are even");
}
else
{
    console.log("None is even");
    console.log("Bye");
} 