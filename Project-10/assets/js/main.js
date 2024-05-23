let text = prompt('Ingresa unas Palabras');

function countAndUpperLetters(word){
    let upper = word.toUpperCase();
    let counter = word.length;

    return 'La palabra ha sido: '+upper+' y tiene '+counter+' letras';
}

alert(countAndUpperLetters(text));