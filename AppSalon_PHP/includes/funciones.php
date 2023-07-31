<?php

function obtener_servicios(){
    try{
        //Importar las credenciales
        require 'database.php';
        
        //Consulta SQL
        $sql = "SELECT * FROM servicios;";
        
        //Realizar la consulta
        $consulta = mysqli_query($db, $sql);
        
        return $consulta; 
        //Acceder a los resultados
        // echo '<pre>';
        // var_dump(mysqli_fetch_assoc($consulta));
        // echo '</pre>';
        
        //Cerrar la conexion (OPCIONAL) se hace automaticamente
        $resultado = mysqli_close($db);
    }
    catch (\Throwable $th){
        var_dump($th);
    }
}

obtener_servicios();