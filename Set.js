let nums=new Set("bookkeeper");//here repeated values dont get counted and doesn't have index values

nums.add(3);
nums.add(5);
nums.add(8);
nums.add(2);
nums.add(1);
nums.add(3);
nums.add("Poonam");
nums.add("Bagchandani");

//console.log(nums);

nums.forEach(value=>{
    console.log(value);
});


console.log(nums.has(2));//retruns boolean value stating value is available or not
