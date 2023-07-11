//Objetos
const producto = { // es la sintaxis de un objeto
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true,
};


// console.log(producto); //vista del objeto
// console.log(producto.nombreProducto); //vista de algo en especifico del objeto
// console.log(producto.precio);
// console.log(producto.disponible);
// console.log(producto["precio"]) //otra forma de consultar algo en especifico 

//Agregar nuevas propiedades
producto.imagen = 'imagen.jpg'

//Eliminar propiedades
delete producto.disponible;

console.log(producto);