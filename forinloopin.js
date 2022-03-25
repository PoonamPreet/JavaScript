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
//For in loop
for (let key in alien) {
    console.log(key,alien.tech);//this hardcoding
    console.log(key,alien[key]);//Here we get proper values
}
//For in loop
for (let key in alien.laptop) {
    
    console.log(key,alien.laptop[key]);//Here we get proper values
}