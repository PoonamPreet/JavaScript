let values=[5,7,8];//Arrays

console.log(values);

console.log(values.length);

values.push(88);

console.log(values);//Adding values to the Array    


console.log(values[1]);

values.push(80);
console.log(values);

console.log(values.pop());

console.log(values.shift());//Removed first value by shifting all values to the left

values.unshift(2);//will add value at the first

console.log(values);

console.log(values.splice(2,2));//index,number of values to be removed

console.log(values)