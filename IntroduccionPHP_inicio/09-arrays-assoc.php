<?php include 'includes/header.php';

$cliente = [
        'nombre' => 'juan',
        'saldo' => 200,
        'informacion' => [
                'tipo' => 'premium',
                'disponible' => 100
            ]
        ];

    echo '<pre>';
    var_dump($cliente);
    echo '</pre>';

// echo $cliente['nombre'];
// echo $cliente['informacion']['disponible'];

$cliente['codigo'] = 202012321;


echo '<pre>';
    var_dump($cliente);
    echo '</pre>';

include 'includes/footer.php';