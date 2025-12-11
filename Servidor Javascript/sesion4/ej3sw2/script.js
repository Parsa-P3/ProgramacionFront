const SWAPI_PEOPLE_URL = "https://swapi.dev/api/people";

class SwapiPeople {
  constructor(url = SWAPI_PEOPLE_URL) {
    this.baseUrl = url;
  }

  async findSharedCharacters(characterName) {
    // Función auxiliar para obtener datos
    const fetchData = async (url) => (await fetch(url)).json();

    // 1. Buscar el personaje principal para obtener sus películas
    const searchRes = await fetchData(`${this.baseUrl}/?search=${encodeURIComponent(characterName)}`);
    const mainCharacter = searchRes.results[0];

    if (!mainCharacter) {
      console.error(`Personaje "${characterName}" no encontrado.`);
      this.sharedCharacters = []; // Limpiar por si acaso
      return;
    }

    // Usaremos un Set para URLs de personajes ya procesados y asegurar que no se repitan
    const processedUrls = new Set([mainCharacter.url]);

    // Limpiamos la colección antes de empezar la búsqueda
    this.sharedCharacters = []; 

    // 2. Iterar sobre las películas y obtener los coprotagonistas
    for (const filmUrl of mainCharacter.films) {
      const filmData = await fetchData(filmUrl);
      
      // 3. Iterar sobre los personajes de la película
      for (const charUrl of filmData.characters) {
        if (!processedUrls.has(charUrl)) {
          processedUrls.add(charUrl);
          
          // 4. Obtener los detalles del coprotagonista
          const costarData = await fetchData(charUrl);
          
          // 5. Almacenar el personaje en la colección de la clase
          this.sharedCharacters.push({
            name: costarData.name,
            gender: costarData.gender,
            films_count: costarData.films.length,
          });
        }
      }
    }
  }

  /**
   * Método que pinta los personajes almacenados en una tabla. (REQUERIDO)
   */
  displaySharedCharactersTable() {
    if (this.sharedCharacters.length === 0) {
      console.log("No hay coprotagonistas para mostrar. Ejecute 'findSharedCharacters' primero.");
      return;
    }
    
    console.log(`\n--- 🚀 Coprotagonistas únicos encontrados: ${this.sharedCharacters.length} ---`);
    
    // Usamos console.table() para la manera más simple de pintar la tabla
    console.table(this.sharedCharacters);
  }
}

// --- Ejemplo de Uso (¡AQUÍ ESTÁ LA CORRECCIÓN!) ---
(async () => {
  // Crear una instancia de la clase
  const swapi = new SwapiPeople();
  const targetCharacter = "Luke Skywalker"; // Probemos con Luke para un set grande

  console.log(`Iniciando búsqueda de coprotagonistas para: **${targetCharacter}**`);
  
  // 1. Buscar y almacenar los personajes
  await swapi.findSharedCharacters(targetCharacter);
  
  // 2. ¡AHORA SÍ! Pintar la tabla con los resultados (REQUERIMIENTO PRINCIPAL)
  swapi.displaySharedCharactersTable(); // <-- Esta línea faltaba o no estaba clara en la ejecución

  // 3. Acceder a la propiedad que almacena la colección (Requisito)
  console.log("\n✅ Contenido del array 'sharedCharacters' (Primeros 3 objetos):");
  console.log(swapi.sharedCharacters.slice(0, 3)); 
})();