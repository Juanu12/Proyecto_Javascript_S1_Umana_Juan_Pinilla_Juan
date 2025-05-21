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

   photo = document.getElementById("Pilotjs")
  data = Getdata()
  
  photo.im
}