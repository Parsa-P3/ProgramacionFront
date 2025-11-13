/* Vamos a coger los datos de nuestros pokemon favoritos y vamos a hacer un cuadrante de
manera dinámica de un cuadrante de pokemon de filas de 4 pokemon cada uno. Las filas
podemos jugar con el css para que nos cuadre mediante anchos pero tendremos que
cargarlos uno a uno creando la tarjeta.
Cada tarjeta tendra un div tarjeta que a su vez dentro tendra un div imagen y un div titulo, y
dentro de título un href que me lleve a la url del pokemon.
*/


const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=333";
const contenedor = document.getElementById("pokemonGrid");


fetch(url).then(resultado => {
    resultado.json().then(data => {
        //REALMENTE TENÉIS QUE EMPEZAR A PROGRAMAR AQUI

        const detallePromises = data.results.map(pokemon =>
            fetch(pokemon.url)
                .then(res => res.json())
                .catch(err => null) // en caso de fallo devolvemos null para mantener el orden
        );


        // Usamos Promise.all para esperar a que todas se resuelvan
        Promise.all(detallePromises).then(allPokeData => {
            // allPokeData es un array con los datos de cada pokémon
            allPokeData.forEach((pokeData, i) => {
                if (!pokeData) return;

                // Obtenemos el pokémon correspondiente
                const pokemon = data.results[i];

                const tarjeta = document.createElement("div");
                tarjeta.classList.add("tarjeta");

                const imagenDiv = document.createElement("div");
                imagenDiv.classList.add("imagen");

                const imagen = document.createElement("img");
                imagen.src = pokeData.sprites.other["official-artwork"].front_default;
                imagen.alt = pokeData.name;
                imagenDiv.appendChild(imagen);

                const tituloDiv = document.createElement("div");
                tituloDiv.classList.add("titulo");
                const enlace = document.createElement("a");
                enlace.href = pokemon.url;
                enlace.textContent = pokeData.name;
                tituloDiv.appendChild(enlace);

                tarjeta.appendChild(imagenDiv);
                tarjeta.appendChild(tituloDiv);

                contenedor.appendChild(tarjeta);
            });



            
        }).catch(errAll => {
            console.error('Error al obtener detalles de pokémon', errAll);
        });

        console.log("data", data);
    }).catch(errData => {
        console.error('Error al parsear JSON', errData);
    });
}).catch(err => {
    console.error('Error en la petición fetch', err);
});