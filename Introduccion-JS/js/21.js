//funciones de flecha


const sumar2 = (n1 , n2) => console.log(n1+n2);

sumar2(2,5);

const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo('JavaScript')

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
meses.forEach (mes =>{
    if(mes == 'Marzo'){
        console.log("Marzo si existe");
    }
})


//some ideeal para arrelgo de objetos
let resultado;

resultado =  carrito.some( producto => producto.nombre === 'Celular');

//Reduce
resultado = carrito.reduce( (total, producto) =>total + producto.precio, 0);

//filter
resultado = carrito.filter( producto =>  producto.precio >400);
resultado = carrito.filter( producto => producto.nombre !== 'Celular');


console.log(resultado);
