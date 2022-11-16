const compras=['huevos','manzanas','pan','leche','verduras'];
//añadimos aceite de girasol
compras.push('aceite de girasol');
console.log(compras);
//eliminamos aceite de girasol
compras.pop();
console.log(compras);
//array de peliculas
const peliculas=[
    {titulo:'start wars',director:'lucas',fecha:new Date(1985,10,5)},
    {titulo:'duro de matar',director:'domingo',fecha:new Date(2000,2,15)},
    {titulo:'gato con botas',director:'banderas',fecha:new Date(2010,1,2)}
];
//filtrando peliculas
const filtro=peliculas.filter(obj=>obj.fecha > new Date(2010,1,1));
console.log(filtro);
//obteniendo la lista de directores
const list_directores=peliculas.map(obj=>{return obj.director});
console.log(list_directores);
//obteniendo la lista de titulos
const list_titulos=peliculas.map(obj=>{return obj.titulo});
console.log(list_titulos);
//concatenando lista de directores y lista de titulos
const list_concat=list_directores.concat(list_titulos);
console.log(list_concat);
//concatenacion con propagacion
const list_prop=[...list_directores,...list_titulos];
console.log(list_prop);