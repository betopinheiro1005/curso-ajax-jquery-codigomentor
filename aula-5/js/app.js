$(document).ready(function(){
	$("button").click(function(){
		$.getJSON("dados.json", function(dados){
			console.log(dados);
			var pessoas = [];
			var idadeMenor;

			$.each(dados, function(index, obj){
				pessoas.push(obj.idade);
				idadeMenor = pessoas[0];

				$.each(pessoas, function(index, idade){
					if(idade < idadeMenor){
						idadeMenor = idade;
					}
				});

			});

			$("#info").text("A menor idade é " + idadeMenor);

		});
	});	
});