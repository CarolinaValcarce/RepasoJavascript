/*Escribe un programa que pida un numero mayor que 1 y que escriba si el numero es primo o no.
Numero primo es aquel que es divisible entre el mismo y la unidad unicamente.*/

let numero=parseInt(prompt('Dame un numero para descubrir si es primo: '));
var mensaje= document.getElementById('ejercicio4');
function esPrimo(numero){
	for(let i=2;i<numero;i++){
		if (numero%i==0){
			console.log('El numero no es primo');
			mensaje.innerHTML=`<h4>El ${numero} no es primo</h4>`;

		}else{
			console.log('El numero es primo');
			mensaje.innerHTML=`<h4>El ${numero} es primo</h4>`;
		}
	}
}
esPrimo(numero);