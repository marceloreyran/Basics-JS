const sueldos = [1200, 2200, 3300, 4400, 5500, 6600, 11000];

let sueldoUsuario = parseInt(prompt("Cual es tu sueldo?"));


function buscarSueldos(salarios, miSueldo){

    let busqueda = salarios.filter(salario => salario >= miSueldo);
    let ordenar = busqueda.sort((a, b) => a - b);

    console.log("Hay varios sueldos mayores a "+ miSueldo +", son estos");

    for( let i in ordenar) console.log(ordenar[i]);
}

buscarSueldos(sueldos, sueldoUsuario);