function soloTrue()
{
    return true;
}
async function funcionAsincrona()
{
    let vartimer=setTimeout(()=>console.log("Hola soy una promesa"),5000);
    return vartimer;
}
function* idPares()
{
    let id=0;
    while(id<=20)
    {
       yield id=id+2;
    }
}
console.log(soloTrue());
console.log(funcionAsincrona());
console.log(idPares());
console.log(idPares());
console.log(idPares());