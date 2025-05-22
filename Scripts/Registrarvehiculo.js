
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


Fetchdata()

document.getElementById("Send").addEventListener("click", async function (e) {
        e.preventDefault()

        let Esc = document.getElementById("Value1").value
        let Modelo = document.getElementById("Value2").value
        let VelMaxima = document.getElementById("Value3").value
        let Aceleracion = document.getElementById("Value4").value
        let Consumoneumaticos = document.getElementById("Value5").value
        let Motor = document.getElementById("Value6").value
        let Color = document.getElementById("Value7").value
        let imagenurl = document.getElementById("Value8").value


        const nuevoauto = {
                escuderia: Esc,
                modelo: Modelo,
                velocidad_maxima_kmh: VelMaxima,
                aceleracion_0_a_200_kmh_segundos: Aceleracion,
                consumo_neumaticos: Consumoneumaticos ,
                motor: Motor ,
                color: Color ,
                imagen: imagenurl 

                

        }








        if (!Esc || !Modelo || !VelMaxima || !Aceleracion || !Consumoneumaticos || !Motor || !Color|| !imagenurl) {
                alert("Por favor completa todos los campos.");
                return;
        }

        const response = await fetch("https://6813e31f225ff1af16276aea.mockapi.io/api/v1/students/Autos", {
                method: "POST",
                headers: {
                        "Content-Type": "application/json"
                },
                body: JSON.stringify(nuevoauto)

        }

        );

        if (response.ok) {
                const data = await response.json()
                alert("El auto fue añadido con exito", data)
                document.getElementById("Value1").value = "";
                document.getElementById("Value2").value = "";
                document.getElementById("Value3").value = "";
                document.getElementById("Value4").value = "";
                document.getElementById("Value5").value = "";
                document.getElementById("Value6").value = "";
                document.getElementById("Value7").value = "";
                document.getElementById("Value8").value = "";


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
        document.getElementById("Value7").value = "";
        document.getElementById("Value8").value = "";

    }
    
    document.getElementById("Cancel").addEventListener("click", function (e) {
        e.preventDefault();
        limpiarCampos();  
    });
