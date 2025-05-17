async function Obtaindata() {
      try {
        const response = await fetch("https://6818a32a5a4b07b9d1d01b5a.mockapi.io/api/v1/Admin");
        const data = await response.json();
        console.log(data); 
        return data;      

      } catch (error) {
        console.error("Hubo un problema al obtener los datos:", error);
      }
    }


async function Checkingdata(){
      
      
}