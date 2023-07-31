<?php include 'includes/header.php';

$productos = [
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
        ],
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ],
    [
        'nombre' => 'Tablet',
        'precio' => 200,
        'disponible' => true
    ]
];

foreach ($productos as $producto){ ?>
    <li>
        <p>Producto: <?php echo $producto['nombre']; ?> </p>
        <p>Precio: <?php  echo '$'. $producto['precio']; ?> </p>
        <?php
            if($producto['disponible']){
                echo '<p>Disponible</p>';
            }else{
                echo '<p>No Disponible</p>';
            }
        ?>
    </li>
    <?php
}


include 'includes/footer.php';