let nombre = 'Marcelo';
let apellido = 'Reyna ';
let edad = 30;
let pais = 'Mexico';
let conocimientos =  ['Html','Css','JS'];


console.log(`Hola soy ${nombre} ${apellido}, tengo ${edad} años,  soy de ${pais} y tengo los siguientes conocimientos en ${conocimientos[0]}, ${conocimientos[1]}, ${conocimientos[2]}`);


edad = 35;
conocimientos.push('React','Node JS');
console.log('Ahora ya tengo ' + edad + ' años y tengo nuevos conocimientos en ' + conocimientos[3], 'y '+ conocimientos[4]);