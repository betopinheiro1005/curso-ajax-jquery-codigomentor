$(document).ready(function(){
	$("#btnClicar").click(function(){
		$.get("dados.json", function(dado, status, xhr){
			console.log(dado);
			$("#info").text(dado.nome + " " + dado.sobrenome);
		});
	});
});