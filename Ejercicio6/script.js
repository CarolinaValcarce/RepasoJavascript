/*EJERCICIO 6.
ESCRIBIR UN PROGRAMA QUE PERMITA INTRODUCIR UNA SERIE INDETERMINADA DE NUMEROS HASTA QUE SU SUMA NO SUPERE 50. 
CUANDO SUPERE LOS 50 SE DEBE ESCRIBIR EL TOTAL ACUMULADO Y CUANTOS NUMEROS SE HAN INTRODUCIDO.*/

let contador=0;
let suma=0;
var mensaje=document.getElementById("ejercicio6");

while(suma<50){
	suma+=parseInt(prompt("Dame un numero para incorporar a la suma: "));
	contador++
}
mensaje.innerHTML=`<h4> El total acumulado de todos los numeros introducidos es: ${suma} </h4>
					<br> <h4> Y se han introducido ${contador} numeros  </h4>`;