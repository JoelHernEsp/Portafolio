//Queryselector
const heading = document.querySelector('.header__texto h2'); //retorna 0 o un elemento 
heading.textContent = 'nuevo heading';
console.log(heading);

//queryselectorall
const enlaces = document.querySelectorAll('.navegacion a');//retorna de 0 a todos los existentes
enlaces[0].textContent = 'nuevo texto del enlace';
enlaces[0].classList.add  ('nueva-clase');
// enlaces[0].classList.remove  ('navegacion__enlace');

//Generar un nuevo enlace
const nuevoEnlace = document.createElement('A');//en mayusculas y sin apertura y cierre

//agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//agregar el texto
nuevoEnlace.textContent = 'Tienda virtual';

//agregar la clase
nuevoEnlace.classList.add('navegacion__enlace');

//agregarlo al documento
const navegacion = document.querySelector('.navegacion');

navegacion.appendChild(nuevoEnlace);


console.log(nuevoEnlace);

//eventos

// console.log(1);

// window.addEventListener('load', function(){ //load espera a que js y los archivos que dependen del html esten listos
//     console.log(2);
// })

// window.onload = function(){ //onload es igual a load
//     console.log(3);
// }

// document.addEventListener('DOMContentLoaded', function(){ //unicamente espera la descarga del html sin importar css o img 
//     console.log(4);
// })

// console.log(5);

// window.onscroll = function(){
//     console.log('scrolling...')
// }


//seleccionar elementos y asociarles un evento

// const btnEnviar = document.querySelector('.boton--primario');
// btnEnviar.addEventListener('click', function(evento){
//     console.log(evento);
//     evento.preventDefault();

//     //validar el formulario

//CLICK ES MAS PARA USAR EN OTRAS COSAS FUERA DE LOS FORMULARIOS

//     console.log('enviando formulario');

// });


//eventos de los input y textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombreInput.addEventListener('input', leerTexto);
emailInput.addEventListener('input', leerTexto);
mensajeInput.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(e){
    e.preventDefault();

    //validar el formulario

    const {nombre, email,mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta("Todos los campos son obligatorios",'error');

        return; //corta la ejecucion del codigo
    }else{
        mostrarAlerta("Su comentario ha sido enviado.")
    }

    //enviar el formulario


    console.log("Enviando Formulario...");
});

function  leerTexto(e){
    //console.log(e.target.value);

    datos[e.target.id] = e.target.value;


}

function mostrarAlerta(mensaje,error = null){
    const alerta = document.createElement('P');
    alerta.textContent=mensaje;

    if(error){
        alerta.classList.add('error');
        
    }else{
        alerta.classList.add('enviado');
    }
    formulario.appendChild(alerta)
    //Desaparezca luego de 5 seg

    setTimeout(() => {
        alerta.remove();
    }, 5000);
}
