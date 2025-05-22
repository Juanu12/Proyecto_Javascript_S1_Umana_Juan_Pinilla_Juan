
autos = document.getElementById("Carsjs")

async function Fetchdata(){
try{
    const response = await fetch("https://6813e31f225ff1af16276aea.mockapi.io/api/v1/students/Autos")
    if (!response.ok){
        throw new Error(`Error HTTP: ${response.status}`);
    }
    
    
   const data = await reponse.json()
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

    info += `      <div class="Infocontainer">
      <div class="Infodisplay">
      <img  id="Carimg"  src="${auto.imagen}" alt="">
      <div class="Letters">
      <p>sfkwsfosef</p>
      <p>fsfsfsfsf</p>
      <p>fsfsfsfsf</p>
      <p>fsfsfsfsf</p>
      <p>fsfsfsfsf</p>
      <p>fsfsfsfsf</p>
      <p>fsfsfsfsf</p>

      </div>
      </div>
</div>
`


  }
  autos.innerHtML = info
}

Showdata()