
async function Fetchdata() {
        try {
                response = await fetch("https://6818a2f25a4b07b9d1d018e3.mockapi.io/Equipos")
                if (!response.ok) {
                        throw new Error(`Error HTTP: ${response.status}`)
                }
                data = await response.json()

                console.log(data)
                return data
        }

        catch (error) {
                console.error("Ocurrió un error", error)

        }

}

Fetchdata()

document.getElementById("Send").addEventListener("click", async function (e) {
        e.preventDefault()

        let Nom = document.getElementById("Value1").value
        let Auto = document.getElementById("Value2").value
        let Piloto1 = document.getElementById("Value3").value
        let Pais = document.getElementById("Value4").value
        let Urllogo = document.getElementById("Value5").value
        let Piloto2 = document.getElementById("Value6").value

        const nuevoEquipo = {
                nombre: Nom,
                logo: Urllogo,
                pais: Pais,
                auto: Auto,
                piloto1: Piloto1 ,
                piloto2: Piloto2 
                

        }








        if (!Nom || !Auto || !Piloto1 || !Piloto2 || !Pais || !Urllogo) {
                alert("Por favor completa todos los campos.");
                return;
        }

        const response = await fetch("https://6818a2f25a4b07b9d1d018e3.mockapi.io/Equipos", {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevoEquipo)

        }

        );

        if (response.ok) {
                const data = await response.json()
                alert("El equipo fue añadido con exito", data)
                document.getElementById("Value1").value = "";
                document.getElementById("Value2").value = "";
                document.getElementById("Value3").value = "";
                document.getElementById("Value4").value = "";
                document.getElementById("Value5").value = "";
                document.getElementById("Value6").value = "";

        } else {
                alert("Hubo error")

        }


}

)
function limpiarCampos() {
        document.getElementById("Value1").value = "";
        document.getElementById("Value2").value = "";
        document.getElementById("Value3").value = "";
        document.getElementById("Value4").value = "";
        document.getElementById("Value5").value = "";
        document.getElementById("Value6").value = "";
    }
    
    document.getElementById("Cancel").addEventListener("click", function (e) {
        e.preventDefault();
        limpiarCampos();  
    });
