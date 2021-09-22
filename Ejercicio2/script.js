/*EJERCICIO 2.

ESCRIBE UN PROGRAMA QUE CALCULE EL AREA DE FIG GEOMETRICAS : TRIANGULO, RECTANGULO Y CIRCULO. EN PRIMER LUGAR PREGUNTA DE QUE FIGURA SE QUIERE CALCULAR EL AREA.
Y LUEGO SOLICITA LOS DATOS QUE DESEAS PARA CALCULARLO.
TRIANGULO= B*H/2
RECTANGULO=B*H
CIRCULO=PI* R**2  */
function areaTriangulo(base, altura){
	let area=base*altura/2;
	var mensaje=document.getElementById('ejercicio2');
	mensaje.innerHTML=`<h3>El area del triangulo es: ${area} </h3>`;
}
function areaRectangulo(base, altura){
	let area=base*altura;
	var mensaje=document.getElementById('ejercicio2');
	mensaje.innerHTML=`<h3>El area del rectangulo es: ${area} </h3>`;
}
function areaCirculo(radio){
	let area= Math.PI*radio**2;
	var mensaje=document.getElementById('ejercicio2');
	mensaje.innerHTML=`<h3>El area del circulo es: ${area} </h3>`;
}

let pregunta=parseInt(prompt("De que figura desdeas calcular el area: 1.Triangulo, 2.Rectangulo. 3.Circulo"));
if (pregunta===1){
	let base=parseFloat(prompt("Dame la base: "));
	let altura= parseFloat(prompt("Dame la  altura: "));
	areaTriangulo(base, altura);
} else if( pregunta===2){
	let base=parseFloat(prompt("Dame la base: "));
	let altura= parseFloat(prompt("Dame la  altura: "));
	areaRectangulo(base, altura);
}else if (pregunta===3){
	let radio=parseFloat(prompt('Dame el radio'));
	areaCirculo(radio);
}else{
	alert('Debes elegir una opcion de la 1 a la 3.');
}

