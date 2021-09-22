/*EJERCICIO 7.
CREA 3 ARRAYS. EL PRIMERO TENDRA 5 NUMEROS, EL SEGUNDO SE LLAMARA PARES Y EL TERCERO IMPARES. AMBOS ESTARAN VACIOS.
DESPUES MULTIPLICA CADA UNO DE LOS ELEMENTOS DEL PRIMER ARRAY POR UN NUMERO ALEATORIO ENTRE 1 Y 10.
SI EL RESULTADO EWS PAR GUARDA SU NUMERO EN EL ARRAY DE PARES Y SI ES IMPAR EN EL ARRAY DE IMPARES.
EL ARRAY DE PARES E IMPARES*/

var arreglo=[3,5,6,4,9];
let pares=[];
let impares=[];

let aleatorio=Math.round(Math.random()*10);
console.log(aleatorio);

arreglo.forEach(numero=>{
	const resultado=numero*aleatorio;
	console.log(resultado);
	if (resultado%2==0){
		pares.push(resultado);
		
	} else{
		impares.push(resultado);
	
	}

}); 

console.log(pares);
console.log(impares);
	

