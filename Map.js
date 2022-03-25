let map=new Map();

map.set("People","Java");//key,value
map.set("pupil","JavaScript");
map.set("Pople","Android");
map.set("Popeye","ML");

console.log(map.keys());//Prints entire map

console.log(map.has("People"));//prints status of key available or not

for(let[k,v] of map)
{
    console.log(k,":",v);
}

map.forEach((v,k)=>//Value is given first then key for maps
{
    console.log(k, ":",v);
});