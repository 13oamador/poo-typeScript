'use strict'

/*CLASE*/

var bicicleta = {
	color: 'Rojo',
	modelo: 'BMX',
	frenos: 'Disco',
	VelMaxima: '60km',

	cambiaColor: function(nuevo_color){
		this.color = nuevo_color;
		console.log(this);
	}
};

bicicleta.cambiaColor("Azul");