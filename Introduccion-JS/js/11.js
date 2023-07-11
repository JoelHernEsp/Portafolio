//Objetos
const producto = { // es la sintaxis de un objeto
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true,
};

//Forma anterior
// const precioProducto = producto.precio
// const nombreProducto = producto.nombreProducto

// console.log(precioProducto)
// console.log(nombreProducto)


//Destructuring
// const {precio} = producto;
// const {nombreProducto} = producto;
const {precio, nombreProducto} = producto; //Forma mas corta

console.log({precio})
console.log({nombreProducto})