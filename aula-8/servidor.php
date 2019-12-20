<?php

if(isset($_POST['nome']) && isset($_POST['sobrenome'])){
	$nome = $_POST['nome'];
	$sobrenome = $_POST['sobrenome'];
	echo "Usuário " . $nome . " " . $sobrenome . " foi registrado!";
}

?>