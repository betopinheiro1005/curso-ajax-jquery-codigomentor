$(document).ready(function(){
	$("input[type=submit]").click(function(event){
		event.preventDefault();
		var nome = $("#nome").val();
		var sobrenome = $("#sobrenome").val();
		$.post("servidor.php", {nome: nome, sobrenome: sobrenome}, function(resposta){
			$("#info").text(resposta);
		});
	});
});