/*EJERCICIO 1.
SOLICITA EL NOMBRE Y LA EDAD Y MUESTRA POR CONSOLA EL MENSAJE:'Hola ____, tienes _____años y el año que viene tendras ____años'.
REALIZA EL EJERCICIO CON PROMPT (MENSAJE) Y HAZ USO DE LOS TEMPLATE STRING*/


function mostrarmensaje(nombre,edad){
	var mensaje=document.getElementById('ejercicio1');
	mensaje.innerHTML=`<h3> Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${edad+1} años </h3>`;
}


let nom=prompt("Dame tu nombre: ");
let ed=parseInt(prompt('Dame tu edad: '));
mostrarmensaje(nom,ed);
