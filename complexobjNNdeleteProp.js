let alien=
{
    name:'Poonam',
    tech :'JS',//even if a comma at the end os given its fine with the java script
    laptop:
    {
        cpu:'i7',
        ram:4,
        brand:'Asus'
    }

}

console.log(alien.tech);

console.log(alien.laptop.brand);//object of object this is known as complex object

console.log(alien.laptop?.brand?.length);//To make sure variable is available other wiseundefined error will be thrown '?'

delete alien.laptop;//Option to delete the mentioned property

console.log(alien);


