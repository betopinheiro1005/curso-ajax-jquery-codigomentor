$(document).ready(function(){
	$("button").click(function(){
		$.getJSON("dados.json", function(dados){
				console.log(dados);
				$.each(dados.funcionarios, function(index, obj){
					$("ul").append("<li>" + obj.nome + ": " + obj.salario + "</li>");
				});

		});
	});	
});