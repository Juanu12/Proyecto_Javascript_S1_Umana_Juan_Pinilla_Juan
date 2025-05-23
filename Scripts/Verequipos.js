
const Teams = document.getElementById("PrincipalContainer")


async function Fetchdata() {
        try {
                response = await fetch("https://6818a2f25a4b07b9d1d018e3.mockapi.io/Equipos")
                if (!response.ok) {
                        throw new Error(`Error HTTP: ${response.status}`)
                }
                data = await response.json()

                return data
        }

        catch (error) {
                console.error("Ocurrió un error",error)

        }

}


async function obtaininfo() {
        data = await Fetchdata()
        let info = ""
        for(i =0; i<data.length; i++){
                equipos = data[i]
                info += `<div class="Chartelementscontainer">

            <img src="${equipos.logo}" alt="">
            <div class="Letters1">
                <p> Nombre ${equipos.nombre}</p>
                <p> Auto ${equipos.auto}</p>
            </div>
                <div class="Letters2">
                <p>Pais ${equipos.pais}</p>
                <p>Piloto1 ${equipos.piloto1}</p>
                <p>Nacionalidad ${equipos.nacionalidad1}</p>

            </div>
            <div class="Letters3">
                <p>Piloto2 ${equipos.piloto2}</p>
                <p>Nacionalidad ${equipos.nacionalidad2}</p>
                <button class="deletebtn" dataid=${equipos.id}>eliminar</button>
            </div>
        </div>`
        }
        Teams.innerHTML = info
        document.querySelectorAll(".deletebtn").forEach(button => {
                button.addEventListener("click", async (e) =>  {
                        const id = e.target.getAttribute("dataid");
                        await deldata(id);
                        Showdata();
                })
        });

}

async function deldata(id) {
        try{
        const response = await fetch(`https://6818a2f25a4b07b9d1d018e3.mockapi.io/Equipos/${id}`,{
                method: "DELETE"


        });
        if(!response.ok){

                throw new Error (`Error al eliminar ${response.status}`)
        }
        alert( `Equipo con id ${id} eliminado con exito `)
        }
        catch(error){
                alert("error eliminando el auto",error)
        }
        {


        }

        
}

obtaininfo()