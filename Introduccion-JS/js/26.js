//this
//hace referencia al mismo objeto que se esta trabajando, no debe usarse funcion de flecha
const reservacion  = {
    nombre: 'joel',
    apellido: 'hernandez',
    total: 5000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}

const reservacion2  = {
    nombre: 'pedro',
    apellido: 'hernandez',
    total: 4000,
    pagado: false,
    informacion: function(){
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`)
    }
}


reservacion.informacion();
reservacion2.informacion();