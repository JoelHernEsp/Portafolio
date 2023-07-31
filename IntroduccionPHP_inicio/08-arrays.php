<?php include 'includes/header.php';

$carrito = ['tablet', 'television','computadora'];

//acceder a un elemento del array
echo $carrito[1];

//agrega elemento nuevo en el indice 3 del array
$carrito [3] = 'nuevo producto...';

//agregar un nuevo elemento al final
array_push($carrito,'audifonos');

//agregar al inicio
array_unshift($carrito,'Smartwatch');


//util para ver contenidos del array
echo '<pre>';
var_dump($carrito);
echo '</pre>';



$clientes = array('cliente1','cliente2','cliente3');
echo '<pre>';
var_dump($clientes);
echo '</pre>';


include 'includes/footer.php';