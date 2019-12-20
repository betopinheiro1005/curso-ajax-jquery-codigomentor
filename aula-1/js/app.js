$(document).ready(function(){
	$("button").click(function(){
		$.get("dados.txt", function(dado, status, xhr){
			console.log("Mensagem: " + dado + "\nStatus: " + status + " " + xhr.status);
		});
	});
});