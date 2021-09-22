/* EJERCICIO 8.
DADO UN ARRAY DE LETRAS MOSTRADO A CONTINUACION, SOLICITA UN NUMERO DE DNI Y CALCULA LA LETRA QUE LE CORRESPONDE.
EL NUMERO NO PUEDE SER NEGATIVO NI  TENER MAS DE 8 DIGITOS.
LA POSICION DE LA LETRA ES EL RESULTADO DEL MODULO DEL NUMERO INTRODUCIDO ENTRE 23.

letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']*/

const letras=['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
let dni=parseInt(prompt('Introduce los 8 numeros del DNI y te dire la letra que le corresponde: '));
if ((dni.toString().length==8) && (dni>0)){
	let modulo=dni%23;
	let letra=letras[modulo];
	console.log(`La letra que corresponde al DNI ${dni} es: ${letra}`);
}else{
	alert('El DNI debe ser un numero positivo de 8 digitos');
}

