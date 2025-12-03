const url = "https://swapi.dev/api/people/";
localStorage.clear();

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
    obtenerDatos();

