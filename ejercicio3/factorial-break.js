let factorial=true;
let numFactorial=10;
bucleFactorial:while(numFactorial>0)
{
    factorial=factorial*numFactorial;
    numFactorial--;
    if(numFactorial===1){
        break;
    }
}
console.log(factorial);