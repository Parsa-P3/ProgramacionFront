// 1. JSON DE CASAS 
//////////////////////// hay que crear asi o crear un json externo? ////////////////////////
const jsonCasas = [
    { nombre: "Gryffindor" },
    { nombre: "Slytherin" },
    { nombre: "Hufflepuff" },
    { nombre: "Ravenclaw" }
];

// --- CLASE PERSONAJE ---
class Personaje {
    constructor(datosApi) {
        this.nombre = datosApi.name;
        this.varita = datosApi.wand; // Es un objeto {wood, core, length}
        this.esMagoBool = datosApi.wizard; // Booleano
        this.genero = datosApi.gender; // Necesario para el conteo de la casa
        this.imagen = datosApi.image;
    }

    // Método: Nos dice si es mago o no 
    esMago() {
        return this.esMagoBool ? "Sí es mago" : "No es mago (Squib o Muggle)";
    }

    // Método auxiliar para formatear la varita en texto legible
    obtenerInfoVarita() {
        if (!this.varita.wood && !this.varita.core) return "Varita desconocida";
        return `Madera: ${this.varita.wood || "desconocida"}\n +Núcleo: ${this.varita.core || "desconocido"}\n +Longitud: ${this.varita.length || "desconocida"}`;
    }
}

// --- CLASE CASA ---
class Casa {
    constructor(nombreCasa) {
        this.nombre = nombreCasa;
        this.personajesDeCasa = []; // Aquí guardaremos las instancias de Personaje
    }

    // Método: Enumerar personajes de la casa 
    enumerarPersonajes(todosLosDatosApi) {
        // 1. Filtramos del array gigante solo los de esta casa
        let datosFiltrados = todosLosDatosApi.filter(p => p.house === this.nombre);
        
        // 2. Convertimos esos datos en objetos de la clase Personaje
        this.personajesDeCasa = datosFiltrados.map(dato => new Personaje(dato));
    }

    // Método: Cuenta cuantas personas son del genero masculino 
    contarMasculinos() {
        // Filtramos por género 'male' y devolvemos la longitud del array
        return this.personajesDeCasa.filter(p => p.genero === 'male').length;
    }

    // Método para pintar los elementos en el DOM (Lógica visual)
    pintarEnDOM(contenedor) {
        contenedor.innerHTML = ""; // Limpiamos lo que hubiera antes

        // A. Crear Título de la Casa
        let h1 = document.createElement("h1");
        h1.innerText = `Casa ${this.nombre}`;
        h1.classList.add("titulo-casa");

        // EVENTO: Click en el título conteo de chicos
        h1.addEventListener("click", () => {
            let total = this.personajesDeCasa.length;
            let chicos = this.contarMasculinos();
            alert(`De ${total} personajes, ${chicos} son chicos`);
        });

        contenedor.appendChild(h1);

        // B. Crear contenedor de tarjetas (Grid)
        let divGrid = document.createElement("div");
        divGrid.classList.add("grid-personajes");

        // C. Recorrer personajes y crear sus tarjetas
        for (let perso of this.personajesDeCasa) {
            let card = document.createElement("div");
            card.classList.add("card");

            // Imagen (si no tiene, ponemos un placeholder o nada)
            let img = document.createElement("img");
            img.src = perso.imagen || "placeholder.png";
            card.appendChild(img);

            // Nombre
            let nombre = document.createElement("h3");
            nombre.innerText = perso.nombre;
            card.appendChild(nombre);

            // EVENTO: Click en personaje para ver detalles
            card.addEventListener("click", () => {
                alert(`Nombre: ${perso.nombre}\n¿Es mago?: ${perso.esMago()}\nVarita: ${perso.obtenerInfoVarita()}`);
            });

            divGrid.appendChild(card);
        }

        contenedor.appendChild(divGrid);
    }
}

// --- FUNCIÓN DE LLAMADA A LA API ---
async function llamadaAPI(url) {
    try {
        let respuesta = await fetch(url);
        let datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error API:", error);
        return [];
    }
}

// --- LOGICA PRINCIPAL (MAIN) ---
async function cargarAppHarryPotter() {
    
    // 1. Crear elementos básicos del DOM (Selector y Contenedor Principal)
    let body = document.body;

    // Título de la App
    let mainTitle = document.createElement("h2");
    mainTitle.innerText = "Selecciona tu casa de Hogwarts";
    body.appendChild(mainTitle);

    // Selector (Dropdown)
    let select = document.createElement("select");
    select.id = "houseSelect";
    select.classList.add("selector-casas");
    
    // Opción por defecto
    let defaultOption = document.createElement("option");
    defaultOption.text = "-- Elige una casa --";
    // los dos atributos siguientes son true porque queremos que no se pueda seleccionar y que aparezca al cargar
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    // Rellenar selector usando el JSON de casas
    for (let c of jsonCasas) {
        let opt = document.createElement("option");
        opt.value = c.nombre;
        opt.text = c.nombre;
        select.appendChild(opt);
    }
    body.appendChild(select);

    // Contenedor donde pintaremos los personajes
    let mainContainer = document.createElement("div");
    mainContainer.id = "main-container";
    body.appendChild(mainContainer);

    // 2. Traer datos de la API (solo una vez para no saturar)
    const url = "https://hp-api.onrender.com/api/characters";
    let todosLosPersonajesAPI = await llamadaAPI(url);

    // 3. Evento CHANGE del Selector
    select.addEventListener("change", (e) => {
        let nombreCasaSeleccionada = e.target.value;

        // Instancio la clase Casa
        let casaActual = new Casa(nombreCasaSeleccionada);

        // Llamo al método para filtrar y crear los objetos Personaje
        casaActual.enumerarPersonajes(todosLosPersonajesAPI);

        // Pinto la casa en el contenedor
        casaActual.pintarEnDOM(mainContainer);
    });
}

// Arrancar la aplicación
cargarAppHarryPotter();