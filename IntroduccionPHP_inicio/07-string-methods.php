<?php include 'includes/header.php';

$nombreCliente = 'Joel Pablo   ';

//conocer extension de un string
echo strlen($nombreCliente);
var_dump($nombreCliente);

//eliminar espacios en blanco
$texto = trim($nombreCliente);
echo  strlen($texto);

//Uppercase
echo strtoupper($nombreCliente);
//lowercase
echo strtolower($nombreCliente);


$mail1 = 'correo@correo.com';
$mail2 = 'Correo@correo.com';

var_dump(strtolower($mail1) === strtolower($mail2));

echo str_replace('Joel', 'J', $nombreCliente);

//revisar si existe un string
echo strpos($nombreCliente, 'Joel');


$tipoCliente = 'Premium';

echo '<br>';

echo 'El cliente '. $nombreCliente . 'es '.$tipoCliente;
echo '<br>';
echo "El cliente {$nombreCliente} es {$tipoCliente}";



include 'includes/footer.php';