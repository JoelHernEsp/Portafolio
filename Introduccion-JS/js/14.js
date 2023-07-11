//Arreglos o Arrays

const numeros = [10, 20, 30, 40, 50];

//const meses =  new Array('Enero','Febrero','marzo','abril','mayo');//forma con constructor

//acceder a los datos en el arreglo
// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);
// console.log(numeros[3]);
// console.log(numeros[4]);

//conocer la extension de un arreglo
// console.log(meses.length);

// numeros.forEach(function(numero){ //Muestra todos los datos en el arreglo sin tener que hacer el codigo de arriba
//     console.log(numero)
// })

numeros.push(60,70,80); //agrega un nuevo valor al final de un array ya existente
numeros.unshift(-10,-20,-30); //unshift agrega el valor al inicio del array

console.table(numeros);

const meses =  ['Enero','Febrero','Marzo','Abril','Mayo'];

// meses.pop(); //elimina el ultimo elemento del array
// meses.shift(); //elimina el primer elemento del array

meses.splice(2,1); //elimina dependiendo posicion y cuantos se eliminaran luego de este
console.table(meses);

//Rest Operator o Spread Operator
//buenas practicas para no modificar el arreglo original y asi poder agregar elementos
const nuevoArreglo = ['julio', 'junio', ...meses]; // agrega al inicio
const nuevoArreglo1 = [...meses, 'julio', 'junio']; // agrega al final

console.table(nuevoArreglo);
console.table(nuevoArreglo1);

