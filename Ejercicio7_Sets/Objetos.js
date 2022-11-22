let miObj={
    nombre:"Wilson",
    apellido:"Jerez",
    edad:37,
    altura:4.65,
    eresDesarrollador:true
}
let edad=miObj.edad;
console.log(edad);

let lista=[
    {...miObj},
    {
        nombre:"Gabriela",
        apellido:"Jurado",
        edad:50,
        altura:1.60,
        eresDesarrollador:true
    },
    {
        nombre:"Juan",
        apellido:"Nieves",
        edad:40,
        altura:1.70,
        eresDesarrollador:false
    }

];

let listaOrdenada=lista.sort((a,b)=>b.edad-a.edad);
console.log(listaOrdenada);