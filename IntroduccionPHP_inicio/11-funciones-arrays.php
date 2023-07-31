<?php include 'includes/header.php';

//in_array
$carrito = ['Tablet','Computadora','Television'];

var_dump( in_array('Tablet', $carrito));
var_dump( in_array('Audifonos', $carrito));

//Ordenar elementos de un arreglo
$numeros = array(1,3,4,5,1,2);
sort($numeros);// de menor a mayor
rsort($numeros); //de mayor a menor

echo '<pre>';
var_dump($numeros);
echo '</pre>';

//ordenar arreglo asociativo
$cliente = array(
    'saldo' => 200,
    'tipo' => 'Premium',  
    'nombre' => 'Juan'
);

asort($cliente);//ordena por valores en orden alfabetico
ksort($cliente); //ordena por llaves en orden alfabetico
krsort($cliente);//en orden contrario al alfabetico 
arsort($cliente);// en orden contrario al alfabeto los valores
echo '<pre>';
var_dump($cliente);
echo '</pre>';


include 'includes/footer.php';