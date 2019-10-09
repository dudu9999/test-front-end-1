$.('document').ready(function(){
	$.getJSON("scripts/server.json", function(data){
		var items = [];
		$.each(data.encomendas, function(key, val){
			items.push("<li id='"+val.codigo+"'><p>"+val.id+' - '+val.cliente.nome+
				' - '+val.valor+' - '+val.valor+' - '+val.data+"</p></li>"); 
		});

		$("<ul/>",{
			"class":"minha-lista",
			html: items.join("")
			}).appendTo("body");					    
	});	
});