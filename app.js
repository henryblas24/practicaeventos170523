//  Ejercicio 1 :
//  Este programa es buscar un nombre dentro del array y si no se 
//  encuentra dentro de la lista del array, emitira un mensaje que
//  existe o no existe.
//  


/*const arrayName = ['Diego','jose','Pedro'];
const question = prompt('ingrese su nombre');

const condition = arrayName.includes(question);

if (condition) {
    console.log('Si EXISTE en la BD');
 } else {
    console.log('NO EXISTE en la BD');
 };*/
   
/*condition ? console.log('Si existe en la Base de Datos') : console.log('No existe en la Base de Datos');*/

    
    
//  Ejercicio 2 :
//  Este programa es para validar un nombre de una capital, si es correcto 
//  emitira una alerta (excelente),sino emitira un mensaje alerta (No es la 
//  respuesta.
//

/*const btn = document.getElementById('boton');
console.log(btn);

const pregunta = prompt ('Ingrese el nombre de la capital de Perú');
if (pregunta === "Lima") {
    alert('EXCELENTE')
} else {
    alert('No es la respuesta')
};

boton.addEventListener('click','pregunta'); */



//  Ejercicio 3 :
//  Este programa es permite mostrar las propiedades de los eventos 
//  por medio de un click del boton "Haz click"  y a la vez permite ocultar
//  el boton por medio de evento con su propiedad y estilo de css.
//

const btn = document.getElementById('boton');

const callConsole = (e) => {
     console.log('event', e);
     console.log('target', e.target);
     e.target.style = " display : none "
     console.log('type', e.type);
};
btn.addEventListener('click',callConsole);






