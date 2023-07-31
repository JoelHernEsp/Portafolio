<?php include 'includes/header.php';

$autenticado = true;
$admin = false;

if($autenticado || $admin){
    echo 'Usuario autenticado correctamente';
}else{
    echo 'Inicia sesion para continuar';
}

//if anidados...
$cliente = [
        'nombre' => 'Joel',
        'saldo' => '200',
        'informacion' =>[
                'tipo' => 'Premium'
            ]
        ];

echo '<br>';

if(!empty ($cliente)){
    echo 'El arreglo de cliente no esta vacio. ';
    if($cliente['saldo'] > 0 ){
        echo 'El cliente tiene saldo disponible';
    }else{
        echo 'No hay saldo';
    }
}else{
    echo 'El arreglo de cliente esta vacio';    
}
echo '<br>';
//else if

if($cliente['saldo'] > 0){
    echo 'El cliente tiene saldo';
}else if ($cliente['informacion']['tipo'] === 'Premium'){
    echo 'El cliente es usuario Premium';
}else{
    echo 'No hay cliente definido o no tiene saldo o no es premium';
}

//switch
echo '<br>';
$tecnologia = 'PHP';

switch($tecnologia){
    case 'PHP': echo 'PHP, un excelente lenguaje!';
        break;
    case 'JS': echo 'Genial, el lenguaje de la WEB';
        break;
    case 'HTML': echo 'Hiper text module languaje';
        break;

    default: echo 'Lenguaje no reconocido';
        break;   
}


include 'includes/footer.php';