<?php

if(isset($_GET['nome'])){
	$usuario = $_GET['nome'];
	echo strtoupper($usuario);
}

?>