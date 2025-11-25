const url = "https://dragonball-api.com/api/characters";

// Función principal que obtiene todos los personajes (paginación incluida)

async function obtenerDatos() {

    // Contenedor donde se insertarán las tarjetas de personaje en el DOM
    const contenedor = document.getElementById("DragonBallGrid");
    contenedor.innerHTML = '';  // Limpiar el contenedor 

    // URL de la siguiente página a solicitar
    // Acumulador de personajes de todas las páginas
    let nextUrl = url;
    let todosLosPersonajes = [];

    
    // --- Bucle para obtener todas las páginas ---
    while (nextUrl) {
        
        // Hacer petición a la página actual
        const r = await fetch(nextUrl);
            
        // Parsear la respuesta JSON
        const dataObjeto = await r.json(); 
        
        // Karakterleri ana listeye ekle
        if (Array.isArray(dataObjeto.items)) {
            todosLosPersonajes = todosLosPersonajes.concat(dataObjeto.items);
        }
        
        // Actualizar nextUrl según la estructura devuelta por la API
        nextUrl = dataObjeto.links.next;         
    }

    // --- Guardar todos los personajes en localStorage ---
    localStorage.setItem("DragonBall", JSON.stringify(todosLosPersonajes));

    // Usamos el array completo y limpio
    const personajes = todosLosPersonajes;
 
    // Iterar sobre el array de personajes
    personajes.forEach(element => { 
        
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        // --- Imagen ---
        const imagenDiv = document.createElement("div");
        imagenDiv.classList.add("imagen");
        const imagen = document.createElement("img");
        imagen.src = element.image;
        imagen.alt = element.name;
        imagenDiv.appendChild(imagen);

        // --- Titulo/Enlace ---
        const tituloDiv = document.createElement("div");
        tituloDiv.classList.add("titulo");
        const enlace = document.createElement("a");

        enlace.href = element.url ;
        enlace.textContent = element.name;
        tituloDiv.appendChild(enlace);

        // --- Ensamblar tarjeta ---
        tarjeta.appendChild(imagenDiv);
        tarjeta.appendChild(tituloDiv);

        contenedor.appendChild(tarjeta);

        // --- Evento click para ver detalles ---
        tarjeta.style.cursor = "pointer";
        tarjeta.addEventListener("click", () => {
            localStorage.setItem("personajeSeleccionado", JSON.stringify(element));
            window.location.href = `../personaje/personaje.html`;
        });
    });

}

// 4. Esperar a que el DOM esté completamente cargado antes de ejecutar la función (SOLO UNA VEZ)
document.addEventListener('DOMContentLoaded', obtenerDatos);