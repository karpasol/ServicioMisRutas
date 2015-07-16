var ListaRutas = Backbone.View.extend({ 

initialize: function() {
var self = this;
this.collection.on('remove', function() { self.render(); });
this.collection.on('sync', function() { self.render(); }); 
 this.render();
}

,render: function() {
	// limpiar
 this.$el.html('<ul data­role="listview" data­filter="true"></ul>');  
 // pintar rutas
 for(var i = 0; i < this.collection.size(); i++){
	var m = this.collection.at(i);
 var str = '<li><a id="' + m.id + '" href="#">' + m.get('titulo') + '</a></li>' ; 
 this.$el.find('[data­role="listview"]').append(str);
 }
this.$el.find('[data­role="listview"]').listview();}
,

events:{
"click a": "abrirEditarRuta"
}
,
editarRuta: function(vistaEditarRuta) {
this.vistaEditarRuta = vistaEditarRuta;
}
,
abrirEditarRuta: function(e) {
// recuperar id
 var id = $(e.target).attr('id');
 console.log('abrirEditarRuta (' + id + ')');
 this.vistaEditarRuta.model = this.collection.get(id);
 $(':mobile-pagecontainer').pagecontainer('change','#pgEditarRuta');  
 this.vistaEditarRuta.render();
}


 });
 
 
