/*EJERCICIO 3
SOLICITA UN NUERO E IMPRIME TODOS LOS NUMEROS PARES O IMPARES DESDE 1 HASTA ESE NUMERO CON EL MENSAJE ES PAR O IMPAR.
SI EL NUMERO ES 5 EL RESULTADO SERA:
1. ES IMPAR
2. ES PAR.
3. ES IMPAR.
4. ES PAR.
5. ES IMPAR. */

var mensaje=document.getElementById('ejercicio3');
let numero=prompt('Dame un numero maximo del rango: ');

function calculo (numero){
	for(let num=0; num<=numero; num++){
		if(num%2==0){
			console.log(`${num}. ES PAR`);
			// mensaje.innerHTML=`<h4> ${num}. ES PAR </h4>`;
		}else{
			console.log(`${num}. ES INPAR`);
			// mensaje.innerHTML=`<h4> ${num}. ES INPAR </h4>`;
		}
		
	}
}
calculo(numero);