let animales = ['Jaguar', 'Aguila', 'León','Puma'];


const recMostrar = () => {
    document.write('<h1>Este es el Proyecto 12</h1>');
      
    for(let i = 0; i < animales.length; i++){

        let parrafo = `<p>Este animal es ${animales[i]}</p>`;

        document.write(parrafo);
    }
      
};



recMostrar();

/*
El código JavaScript que has seleccionado define una lista de animales y una función recMostrar. Esta función escribe un título en el documento HTML y luego recorre la lista de animales, escribiendo un párrafo para cada animal en el documento.

Aquí está el desglose:

Se define una lista de animales: let animales = ['Jaguar', 'Aguila', 'León','Puma'];

Se define una función recMostrar que no toma ningún argumento.

Dentro de la función recMostrar, se escribe un título en el documento HTML: document.write('<h1>Este es el Proyecto 12</h1>');

Luego, se recorre la lista de animales con un bucle for. Para cada animal en la lista, se crea una cadena de texto que dice "Este animal es " seguido del nombre del animal, y se escribe este texto en un nuevo párrafo en el documento HTML.

Finalmente, se llama a la función recMostrar para ejecutarla: recMostrar();

Por lo tanto, si este código se ejecuta en un navegador, verás un título que dice "Este es el Proyecto 12", seguido de un párrafo para cada animal en la lista, que dice "Este animal es " seguido del nombre del animal.
 */


