
const autos = document.getElementById("Carsjs")

async function Fetchdata(){
try{
    const response = await fetch("https://6813e31f225ff1af16276aea.mockapi.io/api/v1/students/Autos")
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



async function Showdata() {

  data = await Fetchdata()
  let info = ""

  for(i=0; i<data.length; i++){
  let auto = data[i]

    info += `     <div class="Infocontainer">
    <div class="Infodisplay">
    <img  id="Carimg"  src="${auto.imagen}" alt="">
    <div class="Letters">
    <p>${auto.escuderia}</p>
    <p>${auto.modelo}</p>
    <p>${auto.velocidad_maxima_kmh}</p>
    <p>${auto.aceleracion_0_a_200_kmh_segundos}</p>
    <p>${auto.consumo_neumaticos}</p>
    <p>${auto.motor}</p>
    <p>${auto.color}</p>
    </div>
    </div>
</div>
`


  }
  autos.innerHTML = info
}

Showdata()