$(document).ready(function(){
	$("input[type=submit]").click(function(event){
		event.preventDefault();
		var nome = $("#nome").val();
		var sobrenome = $("#sobrenome").val();
		$.post("servidor1.php", {nome: nome, sobrenome: sobrenome}, function(resposta){
			$("#info").text(resposta);
		}).done(function(){
			$("#mensagem").text("Registro realizado com sucesso!");
		}).fail(function(){
			$("#mensagem").text("Ocorreu um erro!");
		}).always(function(){
			console.log("Execução finalizada!");
		});
	});
});