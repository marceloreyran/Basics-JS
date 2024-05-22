let result = 0;

function sumAll(...numbers){


   let resultBox = document.querySelector('#result');
   let numbersBox = document.querySelector('#numbers');
   numbersBox.innerHTML = ' Los <strong>Numeros</strong> que se han utilizado para el resultado son los siguientes <br>';

    for(let count = 0; count < numbers.length; count++){

        result += numbers[count];

        numbersBox.innerHTML += numbers[count];

        if(count !== numbers.length - 1) numbersBox.innerHTML += ' , ';
    }

   resultBox.innerHTML = "El Resultado es: " + result; 


}




sumAll(3,4,5,6,7,8,9,12);


/* 
    Este código JavaScript define una función sumAll que suma todos los números que se le pasan como argumentos y luego muestra los números y el resultado en la página web.

Aquí está lo que hace cada parte del código:

let result = 0;: Declara una variable result y la inicializa a 0. Esta variable se utiliza para almacenar la suma de todos los números.

function sumAll(...numbers) { ... }: Define una función sumAll que acepta un número variable de argumentos. Los tres puntos antes de numbers indican que se trata de un parámetro de "resto", que recoge todos los argumentos restantes en un array.

let resultBox = document.querySelector('#result'); y let numbersBox = document.querySelector('#numbers');: Seleccionan los elementos HTML con los id "result" y "numbers", respectivamente.

numbersBox.innerHTML = ' Los <strong>Numeros</strong> que se han utilizado para el resultado son los siguientes <br>';: Establece el contenido inicial del elemento numbersBox.

El bucle for recorre todos los números pasados a la función. Para cada número, lo suma al resultado y luego lo añade al numbersBox. Si el número no es el último, también añade una coma y un espacio después del número.

resultBox.innerHTML = "El Resultado es: " + result;: Muestra el resultado final en el resultBox.

sumAll(3,4,5,6,7,8,9,12);: Llama a la función sumAll con los números 3, 4, 5, 6, 7, 8, 9 y 12 como argumentos.
*/