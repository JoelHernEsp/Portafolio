//string o cadenas de texto

const tweet = 'Monitor de 20"'; //forma mas comun
const producto2 = 'Monitor HD';
const email = 'correo@correo.com';
//const producto2 = String('Monitor de 30 Pulgadas');
//const producto3 = new String('Monitor de 50 Pulgadas');

console.log( tweet.length);
console.log( producto2);
//console.log( producto3);

//IndexOf (retorna posicion)
console.log(tweet.indexOf('de'));
console.log(producto2.indexOf('de')); //cuando se regresa un numero negativo significa que no lo encontro
console.log(email.indexOf('@'));

//includes (retorna True O False)
console.log(tweet.includes('de'));
console.log(producto2.includes('de'));