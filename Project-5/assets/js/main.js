let tableContainer = document.querySelector('.tables');
let result = 0;

//Bucle para sacar resultado de la tabla 
for(let i = 1; i <= 10; i++){


        // Plantilla para mostrar encabezado y crear los resultados de la caja
                tableContainer.innerHTML += `
                    <div class="tables__item">
                        <h2 class="tables__title">
                             Tabla del ${i}
                         </h2>
                    

                    <ul class="tables__list tables__list--${i}">
                  
                    </ul>
                    </div>
                    `;
                    //Bucle para mostrar los resultados de la tabla
                    for(let n = 1; n <= 10; n++){
                                            
                        //Calcular resultado de la operación 

                        result = i * n;

                        //Mostrar resultado en la caja
                        let list = document.querySelector('.tables__list--'+i);

                       //Agregar operación
                        list.innerHTML += `<li class="list__item">${i + " x " + n + " = " + result}</li>`;

                        
                    }                   
       } 
    
        
        