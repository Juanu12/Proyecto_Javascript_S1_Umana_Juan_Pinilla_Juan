
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
                    <p>dshfgkljdfglhkdfhkd</p>
                
                </div>
                
        
        
            `
            }

            circuits.innerHTML = content
    }

    Showdata()