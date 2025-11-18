
const url = "https://swapi.dev/api/people/";
localStorage.clear();


async function fetchAndStoreAllPeople(startUrl = url) {
    console.log('cargando ...');
    
    let nextUrl = startUrl;
    const allPeople = []; // donde vamos a guardar todos personajes

    try {
        // Recorremos las páginas devueltas por la API mientras exista nextUrl
        while (nextUrl) {
            const response = await fetch(nextUrl);
            
            const data = await response.json();
            
            // Añadimos los resultados de la página actual al array principal
            allPeople.push(...(data.results || []));
            
            // Actualizamos nextUrl con la URL de la siguiente página (null si no hay más)
            nextUrl = data.next;
        }

        // 1) Guardar la lista completa en localStorage bajo la clave 'Peoples'
        localStorage.setItem('Peoples', JSON.stringify(allPeople));

        // 2) Guardar cada personaje por separado usando su nombre como clave
        let count = 0;
        allPeople.forEach((person) => {
            // Normalizamos el nombre para usarlo como clave: sustituimos espacios por guiones y pasamos a minúsculas
            const key = (person.name || 'Unknown Person').replace(/\s+/g, '-').toLowerCase();
            
            // Guardamos el objeto personaje en localStorage bajo la clave normalizada
            localStorage.setItem(key, JSON.stringify(person));
            count++;
        });


        return allPeople;

    } catch (err) {
        console.error(err.message || err);
        return [];
    }
}

fetchAndStoreAllPeople();