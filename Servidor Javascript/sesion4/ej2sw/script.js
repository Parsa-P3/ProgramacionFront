async function obtenerNombresDeUrls(urls) {

    // Mapea el array de URLs a un array de Promesas de fetch
    const promesasDeNombres = urls.map(
        async (url) => {
            const r = await fetch(url);
            const data = await r.json();
            return data.name;

        });

    // Esperamos a que todas las Promesas se resuelvan
    return Promise.all(promesasDeNombres);
}

const url = "https://swapi.dev/api/people";

localStorage.clear();

class Persona {
    constructor(nombre, vehiculos, starships) {
        this.nombre = nombre;
        this.vehiculos = vehiculos;
        this.starships = starships;
    }

    pintarV() {
    const vehiculosStr = this.vehiculos.join(', '); // "" si el array es []
    const starshipsStr = this.starships.join(', '); // "" si el array es []

    if (vehiculosStr.length === 0 && starshipsStr.length === 0) {
        return `${this.nombre} no se ha montado en ningún vehículo/starship.`;
    } else {
        return `${this.nombre} se montó en vehículos: ${vehiculosStr || 'Ninguno'} , y starships: ${starshipsStr || 'Ninguna'}`;
    }
}
};

async function obtenerDatos() {
    const todosLosPersonajes = {};
    const r = await fetch(url);
    const dataObjeto = await r.json();
    dataObjeto.results.forEach(personaje => {
        todosLosPersonajes[personaje.name] = personaje;
    });
    localStorage.setItem("personajesStarWars", JSON.stringify(todosLosPersonajes));
    return true;
};


async function iniciar() {

    await obtenerDatos();

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