//Array methods

const meses =  ['Enero','Febrero','Marzo','Abril','Mayo'];

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

//For each
meses.forEach(function(mes){
    if(mes == 'Marzo'){
        console.log("Marzo si existe");
    }
})

//Includes
let resultado = meses.includes('Marzo');//No sirve usar Includes en un arreglo de objetos

//some ideeal para arrelgo de objetos
   resultado =  carrito.some(function (producto){
       return producto.nombre === 'Celular';
})

//some con funcion de flecha
//resultado = carrito.some(producto => producto.nombre === 'Celular');

//Reduce
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);


//filter
resultado = carrito.filter(function(producto){
    return producto.precio >400;
})
resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular';
})

 
console.log(resultado);