/** Clase de las rutas individuales */

/*var Ruta=Backbone.Model.extend({//creo la clase Ruta del modelo extendiendo backbone model

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

var Ruta = Backbone.Model.extend({
urlRoot:'/misrutas/rutas',
initialize: function() {
if (!this.has("posiciones")) this.set('posiciones', []);
if (!this.has("fecha")) this.set('fecha', Date());
},
defaults: {
titulo: 'Undefined',
visible: 'on',
color: '#000000',
},
});