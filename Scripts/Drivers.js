async function Getdata() {
try{
  const  reponse = await fetch("https://6818a32a5a4b07b9d1d01b5a.mockapi.io/api/v1/Conductores")  
  const   data = await reponse.json()
  console.log(data)
  return(data)
}
  catch(error){

  }    
}


async function Showdata() {

    document.getElementById("").addEventListener("click")
    
}