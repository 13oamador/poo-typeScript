/*Tipos de datos en TypeScript*/

//Datos Personalizaos
type Alphanumericos = string | number;

//String
let cadena: string = "Master en JS";

//Number
let numero: number = 13;

//Boolean
let verdadero_falso: boolean = true;

//Any - capta cualquier tipo de valor
let cualquiera: any = "hola" ;
cualquiera = 2;

//Array
var lenguajes: Array<string> = ["C#", "C++", "VB"];
let years: number[] = [13, 5, 8, 14];

// Varios tipos de datos
let cadena_number: Alphanumericos = "Oscar Amador";
cadena_number = 69;

// Let vs Var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
	let numero1 = 44;
	var numero2 = 55;

	console.log(numero1, numero2);
}
console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years, cadena_number);