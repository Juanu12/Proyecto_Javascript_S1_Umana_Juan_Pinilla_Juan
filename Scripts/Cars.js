async function Fetchdata(){
try{
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
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