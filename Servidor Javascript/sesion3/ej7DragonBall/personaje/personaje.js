document.addEventListener('DOMContentLoaded', () => {
    const contenedorDetalle = document.getElementById("detalle-personaje");
    
    // pedir el objeto desde localstorage y parsear 
    const personajeString = localStorage.getItem("personajeSeleccionado");
    const personaje = JSON.parse(personajeString);

    // crear contenido html basico
    const titulo = document.createElement("h1");
    titulo.textContent = personaje.name;

    const imagen = document.createElement("img");
    imagen.src = personaje.image;
    imagen.alt = personaje.name;
    
    const info = document.createElement("div");
    // Asignar la clase CSS para aplicar los estilos de informacion
    info.classList.add('info-details'); 
    info.innerHTML = `
        <p><strong>Raza:</strong> ${personaje.race }</p>
        <p><strong>Género:</strong> ${personaje.gender}</p>
        <p><strong>Ki:</strong> ${personaje.ki }</p>
        <p><strong>Afiliación:</strong> ${personaje.affiliation }</p>
    `;

    contenedorDetalle.appendChild(titulo);
    contenedorDetalle.appendChild(imagen);
    contenedorDetalle.appendChild(info);
});

function clear(){
    localStorage.removeItem("personajeSeleccionado");
}