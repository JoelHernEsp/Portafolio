<?php include 'includes/header.php';

$numero1 = 20; 
$numero2 = 30;
$numero3 = 30;
$numero4 ='30';

var_dump($numero1 > $numero2);
echo '<br>';

var_dump($numero1 < $numero2);
echo '<br>';

var_dump($numero2 == $numero3);
echo '<br>';

var_dump($numero2 == $numero4);
echo '<br>';

var_dump($numero2 === $numero4);
echo '<br>';

var_dump($numero1 <=> $numero4);
echo '<br>';
var_dump($numero2 <=> $numero4);
echo '<br>';
var_dump($numero2 <=> $numero1);

//si el numero de la derecha es mayor imprime -1, si es igual imprime 0, si es menor imprime 1

include 'includes/footer.php';