let text = prompt('Ingresa unas Palabras');

function countAndUpperLetters(word){
    let upper = word.toUpperCase();
    let counter = word.length;

    return 'La palabra ha sido: '+upper+' y tiene '+counter+' letras';
}

alert(countAndUpperLetters(text));


/*
    Este código JavaScript solicita al usuario que ingrese una palabra o frase. Luego, la función countAndUpperLetters convierte esta entrada a mayúsculas y cuenta la cantidad de caracteres que tiene. Finalmente, se muestra una alerta con la palabra convertida a mayúsculas y la cantidad de caracteres que tiene.
 // Solicita al usuario que ingrese una palabra o frase
// Solicita al usuario que ingrese una palabra o frase
let texto = prompt('Ingresa unas Palabras');

// Define una función que toma una palabra o frase
function contarYMayusculas(palabra){
    // Convierte la palabra o frase a mayúsculas
    let mayusculas = palabra.toUpperCase();
    // Cuenta la cantidad de caracteres en la palabra o frase
    let contador = palabra.length;

    // Devuelve la palabra o frase en mayúsculas y la cantidad de caracteres
    return 'La palabra ha sido: '+mayusculas+' y tiene '+contador+' letras';
}

// Muestra una alerta con la palabra o frase en mayúsculas y la cantidad de caracteres
alert(contarYMayusculas(texto));
*/