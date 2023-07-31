<?php include 'includes/header.php';

//while

$i = 100;
while($i<10){

    echo $i. '<br>';

    $i++;
}

echo '<br>';

//do while
$i =100;
do{
    echo $i. '<br>';

    $i++;
}while($i<10);

//for loop
// for($i=1;$i<100;$i++){
//     if ($i%3 === 0 && $i%5 === 0){
//         echo 'FIZZ BUZZ <br/>';
//     }else if($i %3 === 0){
//         echo  'FIZZ <br/>';
//     }else if($i %5 === 0){
//         echo 'BUZZ <br/>';
//     }else{
//         echo $i. '<br/>';
//     }

// };

$clientes = array('Pedro', 'Juan', 'Karen');

foreach($clientes as $cliente){
    echo $cliente . '<br/>';
};
// sirven para contar la cantidad de datos que tiene un arreglo
// echo count($clientes);
// echo sizeof($clientes);

$cliente = [
    'nombre' => 'Joel',
    'saldo' => 200,
    'tipo' => 'Premium'
];

foreach($cliente as $key => $valor):
    echo $key. '--'. $valor . '<br/>';
endforeach;





include 'includes/footer.php';