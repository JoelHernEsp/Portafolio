//"use strict"; //Correr JS en modo estricto cualquier error evita que se ejecute el codigo
//Objetos
const producto = { // es la sintaxis de un objeto
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true,
};

Object.freeze(producto) //Evita que se le agreguen mas propiedades al objeto, 
// Object.seal(producto) Freeze prohibe todo, seal permite unicamente modificar los valores existentes

producto.imagen = 'imagen.jpg'



console.log(producto);