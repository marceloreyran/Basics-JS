let animales = ['Jaguar', 'Aguila', 'León','Puma'];


const recMostrar = () => {
    document.write('<h1>Este es el Proyecto 12</h1>');
      
    for(let i = 0; i < animales.length; i++){

        let parrafo = `<p>Este animal es ${animales[i]}</p>`;

        document.write(parrafo);
    }
      
};



recMostrar();