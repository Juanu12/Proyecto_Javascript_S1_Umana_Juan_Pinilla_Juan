

async function Obtaindata() {
      try {
        const response = await fetch("https://6818a32a5a4b07b9d1d01b5a.mockapi.io/api/v1/Admin");
        const data = await response.json();
        console.log(data); 
        return data 

      } catch (error) {
        console.error("Hubo un problema al obtener los datos:", error);
         return null; 
      }
    }

async function Checkingdata(){
      document.querySelector("form").addEventListener("submit", async function(e) {
  e.preventDefault(); 
  const email = document.getElementById("Email").value;
  const password = document.getElementById("Pass").value;
  const data = await Obtaindata()
  infoemail = data[0].User
  infopass = data[0].Password

  if ( email === infoemail  && password === infopass )
    {
      window.location.href = "./Principalpage.html"
    
   } else {

    alert ( "Email o contraseña incorrectos")
   }
  
});
      
}

Checkingdata()