let concesionario = [
    {
        marca: "Ford",
        modelo: "Focus",
        precio: 100000,
        km: 0,
        color: "Blanco",
        año: 2024,
        
    },
    
    {
        marca: "Chevrolet",
        modelo: "Onix",
        precio: 800000,
        km: 0,
        color: "rojo",
        año: 2023
    },
    {
        marca: "Acura",
        modelo: "NSX",
        precio: 2000000,
        km: 0,
        color:"negro",
        año: 2024
    }
];


function mostrar(datos){
    let cajaConcesionario = document.querySelector('#concesionario');
    
    datos.forEach(coches => {
        cajaConcesionario.innerHTML += `<h1>${coches.marca}</h1> 
        
        <style>
            h1{
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Montserrat;
                font-size: 3rem;
                color: red;
                gap: 2rem;
            }
            li{
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: Montserrat;
                font-size: 1.5rem;
                color: orange;
                gap: 2rem; 
            }
        </style> 
    
        
        `;
        cajaConcesionario.innerHTML += `<ul>`;

        datos.forEach( modelo => {
            cajaConcesionario.innerHTML += `<li>${coches.modelo}</li>`;
        });

        cajaConcesionario.innerHTML += `</ul>`;
         
      
    });  
 


};

mostrar(concesionario);
