let sueldo = parseInt(prompt('cuanto es el sueldo', 0 ));
let resultado = document.getElementById('resultado');

switch(true) {

        case sueldo < 900:
        resultado.innerHTML = 'Este es el sueldo mas bajo';
        break;
       
        case  sueldo <= 1000:
        resultado.innerHTML = 'Este es medio sueldo con horas extras';

        break;
       
        case sueldo <= 1200:
        resultado.innerHTML = 'Este es medio sueldo con bonos';
        break;

        case sueldo <= 1700:
            resultado.innerHTML = 'Este es el sueldo mas alto';
            break;

        default:
        resultado.innerHTML = 'Encuentra la mejor opcion de sueldo el monto maximo es de $1700';
        break;

       
       
}