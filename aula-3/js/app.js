$(document).ready(function(){
	$("#btnClicar").click(function(){
		$.get("dados.json", function(dados){
			if($("#info").is(":empty")){
				console.log(dados);
				$.each(dados, function(index, obj){
					$("#info").append(obj.nome + " " + obj.sobrenome + "<br />");
				});
			}
		});
	});
});