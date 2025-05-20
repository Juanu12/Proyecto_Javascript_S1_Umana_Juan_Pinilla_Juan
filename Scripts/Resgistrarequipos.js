async function Fetchdata() {
        try {
                response = await fetch("https://6818a2f25a4b07b9d1d018e3.mockapi.io/Equipos ")
                if (!response.ok) {
                        throw new Error(`Error HTTP: ${response.status}`)
                }
                data = response.json()

                return data
        }

        catch (error) {
                console.error("Ocurrió un error",error)

        }

}


async function Mostrarequipos(){















const Button = document.getElementById("Send").addEventListener("click" , async function (e) {
e.preventDefault()

        
})




}