let marcas = [
    ' Audi ',
    ' BMW ', 
    ' Mercedes Benz ' 
];
    velocidad = '250',
    stock = true,
    modelos = ['A5','A8','S8','Q5','X5','X7','CLA'];



     let frase = `<p>Tenemos coches de la marcas ${marcas},
     llegan a una velocidad maxima de ${velocidad}km/h,</p>
     <p>Tenemos los siguientes modelos en ${stock}:</p>
     `;


    modelos.forEach(modelo => {
        frase += ` - ${modelo} <br>`;
    });


    let caja = document.querySelector('#caja');
    caja.innerHTML = frase;


