const contpilots = document.getElementById("Pilotjs")


async function Getdata() {
try{
  const  reponse = await fetch("https://6818a32a5a4b07b9d1d01b5a.mockapi.io/api/v1/Conductores")
  if (!reponse.ok){
    throw new Error (`Error HTTP: ${reponse.status}`)
  }  
  const   data = await reponse.json()
  console.log(data)
  return(data)
}
  catch(error){
    console.error("Ocurrió un error",error.message)
  }    
}


async function Showdata() {

  data = await Getdata()
  let line ="";

  for ( i= 0; i<data.length; i++ ){
    let piloto = data[i]


    
line += `      <div class="PilotsChart">
        <div class="generalcontainer">
          <div class="Pilot">
            <img src="${piloto.imagenpiloto}" alt="Imagen de ${piloto.nombre}">
            <div class="Pilotinfo">
              <div class="pilotonum">
                <img src="${piloto.numeropiloto}" alt="Número de ${piloto.nombre}">
              </div>
              <div class="pilotocar">
                <img src="${piloto.imagen}" alt="Auto de ${piloto.nombre}">
              </div>
              <div class="pilotonombre">${piloto.nombre}</div>
              <div class="pilotopais">${piloto.pais}</div>
              <div class="pilotoequipo">${piloto.equipo}</div>
              <div class="pilotorol">${piloto.rol}</div>
            </div>
          </div>
        </div>
      </div>
`

  }

  contpilots.innerHTML = line;
  
}


Showdata()