<?php



	$conn = new mysqli("128.199.4.13","root","bfWeX777BFEF53q","web_script",3306); //servidor, usuario de base de datos, contraseña del usuario, nombre de base de datos

 	mysqli_set_charset($conn,"utf8");


	if(mysqli_connect_errno()){

		echo 'Conexion Fallida : ', mysqli_connect_error();

		exit();

	}



?>
