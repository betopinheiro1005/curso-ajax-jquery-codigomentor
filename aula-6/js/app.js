$(document).ready(function(){
	$("button").click(function(){
		$.ajax({
			url: "dados.json",
			type: "GET",
			dataType: "json",
			success: function(dados){
				if($("#info").is(":empty")){
					console.log(dados);
					$.each(dados, function(index, obj){
						$("#info").append(obj.nome + " " + obj.sobrenome + "<br />");
					});
				}
			},
			error: function(xhr, status, error){
				console.log(xhr);
				console.log(status);
				console.log(error);
			}

		})

	});
});