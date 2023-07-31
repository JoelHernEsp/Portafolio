<?php include 'includes/header.php';

$clientes = [];
$clientes2 = array();
$clientes3 = array('Pedro', 'Juan', 'Karen');
$cliente = [
        'nombre' => 'Juan',
        'saldo' => 200
];

//empty - revisa si un arreglo esta vacio
var_dump(empty($clientes));
var_dump(empty($clientes3));
var_dump(empty($clientes2));

//isset - revisa si un arreglo esta creado o una propiedad esta definida
echo '<br>';
var_dump(isset($clientes5));
var_dump(isset($clientes));
var_dump(isset($clientes2));
var_dump(isset($clientes3));

//isset permite revisar si una propiedad de un arreglo asociativo existe
var_dump(isset($cliente['nombre']));
var_dump(isset($cliente['codigo']));

include 'includes/footer.php';