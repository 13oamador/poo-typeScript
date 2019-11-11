//Inteface
interface CamisetaBase{
	setColor(color);
	getColor();
}

function estampar(logo:string) {
	return function(target:Function){
		target.prototype.estampacion = function ():void{
			console.log("Estampada con el logo de: " + logo);
		}
	}	
}


//Clase (molde del objeto)
@estampar('Nike') //Decorador
class Camiseta implements CamisetaBase{
	//Propiedades (caracteristicas del objeto)
	private color: string;
	private modelo: string;
	private marca: string;
	private talla: string;
	private precio: number;	

	//Metodos (Acciones del obejto)
	constructor(color, modelo, marca, talla, precio){
		this.color = color;
		this.modelo = modelo;
		this.marca = marca;
		this.talla = talla;
		this.precio = precio;
	}

	public setColor(color){
		this.color = color;
	}

	public getColor(){
		return this.color;
	}
}


//Clase Hija

class Sudadera extends Camiseta {
	public capucha: boolean;

	public setCapucha(capucha){
		this.capucha = capucha;
	}

	public getCapucha(){
		return this.capucha;
	}
}

var camiseta = new Camiseta("fdsdf","sdfgd","sdf","sdfg",4);
console.log(camiseta);
camiseta.estampacion();

var sudadera_Nike = new Sudadera("Rojo","V","Nike","M",13);
sudadera_Nike.setCapucha(true);
console.log(sudadera_Nike);