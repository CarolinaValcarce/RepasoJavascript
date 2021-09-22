/*EJERCICIO 9.
SOLICITAR AL USUARIO UNA PALABRA Y MOSTRAR POR CONSOLA EL NUMERO DE CONSONANTES, VOCALES Y LONGITUD DE LA PALABRA.*/


let palabra=prompt('Introduce una palabra: ').toLowerCase();

vocales=0;
consonantes=0;

Array.from(palabra).forEach(letra=>{
	if(letra==='a' || letra==='e' || letra==='i' ||letra==='o' || letra==='u'){
		vocales++;
	} else{
		consonantes++;
	}
});
console.log(`La palabra ${palabra} tiene ${vocales} vocales y ${consonantes} consonantes. Y un total de ${palabra.length} letras`);