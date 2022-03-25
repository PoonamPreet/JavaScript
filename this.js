let laptop={
    cpu:'i9',
    ram:16,
    brand:'HP',
    
    getConfig:function()
    {
    console.log(this.cpu);//to use variable out of function we need this coz cpu is property of the object
    console.log(laptop.cpu)//Even this way works
    }
    }
    
    laptop.getConfig();