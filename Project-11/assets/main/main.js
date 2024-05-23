let frase = 'Este curso tiene muchos proyectos web';

let palabra = prompt(`En esta frase '${frase}' que palabra querrias reemplazar`);
let reemplazo = prompt(`Has elegido reemplazar la palabra '${palabra}' por que palabra la quieres sustituir`);

function reemplazar(palabraOriginal, palabraReemplazo){

    let busqueda = frase.search(palabraOriginal);
    let fraseFinal = frase;

    if(busqueda && busqueda != -1){
    fraseFinal = frase.replace(palabraOriginal, palabraReemplazo);
   
}else{

    let fraseFinal = 'Esa palabra no existe';

   }

   return fraseFinal;
}

alert(reemplazar(palabra, reemplazo));


/*

Este es un programa simple en JavaScript que pide al usuario que reemplace una palabra en una frase.

Se declara una variable frase que contiene la cadena de texto 'Este curso tiene muchos proyectos web'.
Se pide al usuario que introduzca una palabra que quiera reemplazar en la frase. El valor introducido se guarda en la variable palabra.
Se pide al usuario que introduzca la palabra por la que quiere reemplazar la palabra original. El valor introducido se guarda en la variable reemplazo.
Se define una función reemplazar que toma dos argumentos: palabraOriginal y palabraReemplazo. Esta función busca la palabraOriginal en la frase. Si la encuentra, reemplaza la palabraOriginal por la palabraReemplazo en la frase y devuelve la frase modificada. Si no encuentra la palabraOriginal en la frase, devuelve la cadena 'Esa palabra no existe'.
Finalmente, se muestra una alerta con el resultado de la función reemplazar cuando se le pasan palabra y reemplazo como argumentos.


*/
