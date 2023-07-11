//POO

//objeto literal
const producto = {
    nombre: 'tablet',
    precio: 500
}

//objeto constructor

function Producto(nombre,precio){
    this.nombre = nombre;
    this.precio = precio;
}
//crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function(){
    return `El producto ${this.nombre} tiene un precio de: ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo de 40"', 800);
const producto3 = new Producto('Laptop', 700);


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

