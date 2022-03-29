<?php

    $pcs	        = (isset($_POST['pcs'])) ? $_POST['pcs'] : '';
    $sucursal	    = (isset($_POST['sucursal'])) ? $_POST['sucursal'] : '';
    $equipo	        = (isset($_POST['equipo'])) ? $_POST['equipo'] : '';
    $bolsa	        = (isset($_POST['bolsa'])) ? $_POST['bolsa'] : '';
    $interaccion	= (isset($_POST['interaccion'])) ? $_POST['interaccion'] : '';
    $descuento	    = (isset($_POST['descuento'])) ? $_POST['descuento'] : '';
    $plan	        = (isset($_POST['plan'])) ? $_POST['plan'] : '';
    $fecha      	= (isset($_POST['fecha'])) ? $_POST['fecha'] : '';



    for ($i=0; $i<sizeof($pcs); $i++) 
    {
      echo $pcs[$i]."<br>";
      echo $sucursal[$i]."<br>"; 
      echo $equipo[$i]."<br>"; 
      echo $bolsa[$i]."<br>"; 
      echo $interaccion[$i]."<br>"; 
      echo $descuento[$i]."<br>";  
      echo $plan[$i]."<br>";
      echo $fecha[$i]."<br>";
    }

    


?>