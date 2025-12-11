// Función Auxiliar: obtiene los nombres a partir de un array de URLs
async function obtenerNombresDeUrls(urls) {
    if (!urls || urls.length === 0) {
        return ["N/A"];
    }
    
    // Mapea el array de URLs a un array de Promesas de fetch
    const promesasDeNombres = urls.map(async (url) => {
        try {
            const r = await fetch(url);
            if (!r.ok) {
                // Si falla una URL, al menos devolvemos el error en el array
                return `Error al obtener: ${url}`; 
            }
            const data = await r.json();
            
            // La API de SWAPI usa 'name' para vehículos, starships y people
            return data.name; 
        } catch (error) {
            console.error(`Fallo al obtener ${url}:`, error);
            return `Error de red: ${url}`;
        }
    });
    
    // Esperamos a que todas las Promesas se resuelvan
    return Promise.all(promesasDeNombres);
}


// --- Resto de tu código (sin cambios en la clase Persona y obtenerDatos) ---

const url = "https://swapi.dev/api/people";

localStorage.clear();

class Persona { 
    // Usamos nombres en plural por convención
    constructor(nombre, vehiculos, starships) { 
        this.nombre = nombre; 
        this.vehiculos = vehiculos;
        this.starships = starships;
    }
    
    // El método pinta los arrays de nombres
    pintarV(){
        // Usamos .join(', ') para que los arrays se vean bonitos
        const vehiculosStr = this.vehiculos.join(', ');
        const starshipsStr = this.starships.join(', ');
        
        return `${this.nombre} tiene vehículos: ${vehiculosStr} , y starships: ${starshipsStr}`;
    }
};

async function obtenerDatos() {
    // ... (Tu función obtenerDatos() no necesita cambios) ...
    // [Se asume que esta función se mantiene sin cambios, como en la respuesta anterior]
    const todosLosPersonajes = {};
    const r = await fetch(url);
    const dataObjeto = await r.json();  
    dataObjeto.results.forEach(personaje => {
        todosLosPersonajes[personaje.name] = personaje;
    });
    localStorage.setItem("personajesStarWars", JSON.stringify(todosLosPersonajes));
    return true;
};
// obtenerDatos(); <-- Asegúrate de que esta línea esté eliminada

async function iniciar() {
    
    await obtenerDatos(); // Llamamos y esperamos la obtención inicial

    const datos = localStorage.getItem("personajesStarWars");

    if (datos) {
        const personajes = JSON.parse(datos);
        const instanciasPersonas = [];
        
        for (const nombrePersonaje in personajes) {
            const dataPersonaje = personajes[nombrePersonaje];
            
            // 1. Obtener los nombres de los vehículos y esperar (await)
            const nombresVehiculos = await obtenerNombresDeUrls(dataPersonaje.vehicles);
            
            // 2. Obtener los nombres de las starships y esperar (await)
            const nombresStarships = await obtenerNombresDeUrls(dataPersonaje.starships);

            // 3. Crear la instancia con los arrays de nombres
            const personajeInstancia = new Persona(
                dataPersonaje.name,
                nombresVehiculos, // <-- ¡Ahora contiene nombres!
                nombresStarships // <-- ¡Ahora contiene nombres!
            );
            
            // Imprime el resultado usando el método pintarV()
            console.log(personajeInstancia.pintarV());
            
            // Opcional: Guarda la instancia en un array
            instanciasPersonas.push(personajeInstancia);
        }
    }
}

// Iniciar el proceso
iniciar();