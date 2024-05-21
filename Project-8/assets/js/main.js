window.addEventListener("DOMContentLoaded", () =>{

    let num = 0;
    let result = false;


    do {
        num = parseInt(prompt('Introduce un numero para ver si es par'));
       
    }while(num <= 0);

    function isPair(num){
        if(num % 2 == 0){
            return true;
        }  else {
            return false;
        }
    }

    result = isPair(num);

    let resultBox = document.querySelector("#result");
    let message = "El numero " + num + " no es par";
    
    if(result == true){
        
        message = "El numero " + num + " es inpar";
        
    } 
    
        console.log(message);
        alert(message);
        resultBox.innerHTML = `<h1> ${message} </h1> 
        <style>

          h1{
            color: orange;
            font-size: 2em;
            font-family: 'Montserrat';
            display: flex;
            aling-items: center;
            justify-content: center;
            margin-top: 20px;
           }
        </style>

        `;

});

/*

El código JavaScript proporcionado hace lo siguiente:

Espera a que el Documento HTML esté completamente cargado. Esto se hace utilizando el evento DOMContentLoaded.

Una vez que el documento está cargado, declara dos variables: num y result. num se inicializa a 0 y result se inicializa a false.

Luego, se utiliza un bucle do...while para solicitar al usuario que introduzca un número. La función parseInt se utiliza para convertir la entrada del usuario en un número entero. Este bucle continuará solicitando al usuario hasta que introduzca un número mayor que 0.

Después de que se introduce un número válido, se llama a la función isPair con num como argumento. Esta función verifica si el número es par utilizando el operador de módulo (%). Si el número es par (es decir, si el residuo cuando num se divide por 2 es 0), la función devuelve true. De lo contrario, devuelve false.

El resultado de la función isPair se almacena en la variable result.

A continuación, el código selecciona un elemento HTML con el id "result" y lo almacena en la variable resultBox. También construye un mensaje predeterminado que indica que el número no es par.

Si result es true (lo que significa que el número es par), el mensaje se actualiza para indicar que el número es par.

Finalmente, el mensaje se registra en la consola, se muestra en un cuadro de alerta y se inserta en el elemento HTML resultBox como un encabezado <h1>. 

*/