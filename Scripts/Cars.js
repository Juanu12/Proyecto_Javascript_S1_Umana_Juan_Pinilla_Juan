
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

  let data = await Fetchdata()
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
      <button class="delete-btn" data-id="${auto.id}">Eliminar</button>
    </div>
    </div>
</div>
`


  }
  autos.innerHTML = info
  document.querySelectorAll(".delete-btn").forEach(button => {
    button.addEventListener("click", async (e) => {
      const id = e.target.getAttribute("data-id");
      await deldata(id);
      Showdata();  
    });
});
}

  async function deldata(id) {
    try {
      const response = await fetch(`https://6813e31f225ff1af16276aea.mockapi.io/api/v1/students/Autos/${id}`, {
        method: "DELETE"
      });
  
      if (!response.ok) {
        throw new Error(`Error al eliminar: ${response.status}`);
      }
  
      alert(`Auto con ID ${id} eliminado correctamente`);
    } catch (error) {
      alert("Error eliminando el auto:", error);
    }
  }
Showdata()

