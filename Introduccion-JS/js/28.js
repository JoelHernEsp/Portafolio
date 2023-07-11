//clases

class Producto {
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de: $${this.precio}`;
    }
}


const producto2 = new Producto('Monitor curvo de 40"', 800);
const producto3 = new Producto('Laptop', 700);

//Herencia

class Libro extends Producto {
    constructor(nombre,precio,isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
    
    formatearProducto(){
        return `${super.formatearProducto()}y su isbn es:${this.isbn}`;
    }
}

const libro = new Libro ('JavaScript la revolucion', 120, '123123123');
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());
