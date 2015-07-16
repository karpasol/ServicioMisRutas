/** Colecci�n de Rutas */


var Rutas= Backbone.Collection.extend({
url:'/misrutas/rutas',
	model:Ruta, 
	initialize: function(){
		this.on("add",function(model,col,opt){
			console.log('Rutas:add '+ model.id);
			model.save();
		});
		this.on("remove",function(model,col,opt){
			console.log('Rutas:remove '+ model.id);
			model.destroy({silent:true});
		});
		this.on("change",function(model,opt){
			console.log('Rutas:change '+ model.id);
			if (model.changedAttributes().id) return;
			model.save();
		});
		this.fetch({reset:true});
	}
});

/*
var Rutas=Backbone.Model.extend({//creo la clase Ruta del modelo extendiendo backbone model

	
	
	initialize:function() {
	if(!this.id) this.set('id',_.uniqueId()); 
	this.set('posiciones',[]);
	this.set('fecha',Date());

	},
	defaults:{ 

	titulo:'Undefined',
	visible:'on',
	color:'#000000',
	},

	});*/