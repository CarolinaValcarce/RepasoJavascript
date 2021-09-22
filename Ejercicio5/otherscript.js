/*ESCRIBA UN PROGRAMA QUE PIDA UN NUMERO Y  CALCULE SU FACTORIAL.
EL FACTORIAL DE UN NUMERO ES EL NUMERO MULTIPLICADO POR SUS ANTERIORES HASTA LA UNIDAD.*/

var mensaje=document.getElementById("ejercicio5");
let numero= parseInt(prompt('Dame un numero para calcular su factorial'));
let resultado=1;

function factorial(numero){
	for (let x=numero; x>0; x--){
		resultado*=x;
	}
console.log(`EL FACTORIAL DE ${numero} ES ${resultado}`);
mensaje.innerHTML=`<h4> EL <i>FACTORIAL</i> DE ${numero} ES ${resultado} </h4>`;
}

factorial(numero);