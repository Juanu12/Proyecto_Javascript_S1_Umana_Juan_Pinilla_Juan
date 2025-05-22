circuits = document.getElementById("Circuitsjs")



async function Fetchdata(){
    try{
        const response = await fetch("https://6813e31f225ff1af16276aea.mockapi.io/api/v1/students/Circuits")
        if (!response.ok){
            throw new Error(`Error HTTP: ${response.status}`);
        }
        
        
       const data = await response.json()
        console.log(data)
        return data
    
    
    
    
    } catch (error){
      console.error("Ha ocurrido un error",error.message)
    }
    
    
    }


    async function Showdata(){
            circuits = document.getElementById("Circuitsjs")
            data = await Fetchdata()
            let  content= ""
            for (i=0; i<data.length; i++){
                let info = data[i]


                content += `   
             
        
        
        
                <div class="Circuitscontainer_elements">
                    <img src="${info.imagen} alt="${info.imagen} ">
                    <p> Nombre : ${info.nombre}</p>
                    <p> País: ${info.pais}</p>
                    <p>Lonitud(Km): ${info.longitud_km}</p>
                    <p> Vueltas: ${info.vueltas}</p>
                    <p> Descripción: ${info.descripcion}</p>
                    <p> Tiempo record: ${info.record.tiempo}</p>
                    <p>  Año: ${info.record.año}</p>
                    <p> ${info.record.Piloto || ""}  </p>
                    <p> Clima: ${info.record.clima.estado}</p>

                </div>
                
        
        
            `
            }

            circuits.innerHTML = content
    }

    Showdata()