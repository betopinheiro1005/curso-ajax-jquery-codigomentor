$(document).ready(function(){
	$("button").click(function(){
		var usuario = $("#nome").val();
		$.get("servidor.php", {nome: usuario}, function(dado){
			$("#info").text(dado);
		});
	});
});