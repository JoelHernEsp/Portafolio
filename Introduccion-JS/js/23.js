//Switch

const metodoPago = 'tarjeta';

switch(metodoPago){
    case 'tarjeta': console.log('Pagaste con tarjeta') 
    break;

    case 'cheque': console.log('Se pagara con cheque, revisaremos los fondos primero')
    break;

    case 'efectivo': console.log('Pagaste en efectivo')
    break;

    default: console.log('No se acepto su forma de pago')
    break;
}