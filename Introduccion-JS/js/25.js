const carrito = [
    {nombre: 'Monitor de 20 Pulgadas', precio: 500},
    {nombre: 'Televisor de 50 Pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocidas', precio: 300},
    {nombre: 'Laptop', precio: 800}
];

//foreach 
//muestra los datos a la pantalla
carrito.forEach( producto => console.log(producto.nombre));

//map
//rescata los elementos señalados en un nuevo arreglo
const arreglo2 = carrito.map( producto => (`${producto.nombre} - ${producto.precio}`));

console.log(arreglo2);
