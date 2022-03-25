function Alien(name,tech)
{
this.name=name;
this.tech=tech;

this.work=function () {
    console.log("Solving Bugs");
}
}
let alien1=new Alien("Poonam","Javascript");
alien1.tech="Block Chain";

console.log(alien1);