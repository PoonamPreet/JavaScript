



function fact(n)
{

    if(n==0)
    return 1;
    else
    return n*fact(n-1);
}

let num=5;//Factorial can be done only till 170 later on range exceeds
let result=fact(num);

console.log(result);