const url = "https://hp-api.onrender.com/api/characters"


async function obtenerDatos() {

    const divSlytherin = document.getElementById("divSlytherin");
    const divGryffindore = document.getElementById("divGryffindore");
    const divRavenclaw = document.getElementById("divRavenclaw");
    const divHufflepuff = document.getElementById("divHufflepuff");

    const arrayGryffindore = [];
    const arraySlytherin = [];
    const arrayHufflepuff = [];
    const arrayRavenclaw = [];

    divGryffindore.innerHTML = '';

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        console.log("datos");
        console.log(datos);
        const personajesGryffindore = datos.filter(personaje => personaje.house === "Gryffindor");
        const personajesSlytherin = datos.filter(personaje => personaje.house === "Slytherin");
        const personajesHufflepuff = datos.filter(personaje => personaje.house === "Hufflepuff");
        const personajesRavenclaw = datos.filter(personaje => personaje.house === "Ravenclaw");

        console.log("personajes Gryffindore");
        console.log(personajesGryffindore);
        localStorage.setItem("personajesGryffindore", JSON.stringify(personajesGryffindore));
        arrayGryffindore.push(...personajesGryffindore);
        divGryffindore.innerHTML += `<h2>Gryffindore</h2>
                                     <img src="imgs/gryffindor.png" alt="Gryffindor Crest" ;">
                                     <p>Gryffindor is one of the four Houses of Hogwarts School of Witchcraft and Wizardry, founded by Godric Gryffindor. The house values bravery, courage, chivalry, and daring. Its emblematic animal is the lion, and its colors are red and gold. The house ghost is Sir Nicholas de Mimsy-Porpington, also known as Nearly Headless Nick.</p> <br>
                                     <p>Notable members of Gryffindor include Harry Potter, Hermione Granger, and Ron Weasley. The house has a strong rivalry with Slytherin House.</p>`;   
       /* for (let personaje of arrayGryffindore) {
            divGryffindore.innerHTML += `
            <div class="card" style="width: 18rem;">
                
                <img src="${personaje.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">House: ${personaje.house}</p>
                    <p class="card-text">Ancestry: ${personaje.ancestry}</p>
                </div>
            </div>
            `;
        } */
      
        console.log("personajes Slytherin");
        console.log(personajesSlytherin);
        localStorage.setItem("personajesSlytherin", JSON.stringify(personajesSlytherin));
        arraySlytherin.push(...personajesSlytherin);
        divSlytherin.innerHTML += `<h2>Slytherin</h2>
                                   <img src="imgs/slytherin.png" alt="Slytherin Crest" ;">
                                   <p>Slytherin is one of the four Houses of Hogwarts School of Witchcraft and Wizardry, founded by Salazar Slytherin. The house values ambition, cunning, leadership, and resourcefulness. Its emblematic animal is the serpent, and its colors are green and silver. The house ghost is the Bloody Baron.</p> <br>
                                   <p>Notable members of Slytherin include Severus Snape, Draco Malfoy, and Tom Riddle (Lord Voldemort). The house has a strong rivalry with Gryffindor House.</p>`;
       /* for (let personaje of arraySlytherin) {
            divSlytherin.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${personaje.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">House: ${personaje.house}</p>
                    <p class="card-text">Ancestry: ${personaje.ancestry}</p>
                </div>
            </div>
            `;
        }   */

        console.log("personajes Hufflepuff");
        console.log(personajesHufflepuff);
        localStorage.setItem("personajesHufflepuff", JSON.stringify(personajesHufflepuff));
        arrayHufflepuff.push(...personajesHufflepuff);
        const divHufflepuff = document.getElementById("divHufflepuff");
        divHufflepuff.innerHTML += `<h2>Hufflepuff</h2>
                                    <img src="imgs/hufflepuff.png" alt="Hufflepuff Crest" ;">
                                    <p>Hufflepuff is one of the four Houses of Hogwarts School of Witchcraft and Wizardry, founded by Helga Hufflepuff. The house values hard work, patience, loyalty, and fair play. Its emblematic animal is the badger, and its colors are yellow and black. The house ghost is the Fat Friar.</p> <br>
                                    <p>Notable members of Hufflepuff include Cedric Diggory and Nymphadora Tonks. Hufflepuff House is known for its inclusive nature, accepting students who may not fit into the other houses.</p>`;
        /* for (let personaje of arrayHufflepuff) {
            contenedor.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${personaje.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">House: ${personaje.house}</p>
                    <p class="card-text">Ancestry: ${personaje.ancestry}</p>
                </div>
            </div>
            `;
        } */ 

        console.log("personajes Ravenclaw");
        console.log(personajesRavenclaw);
        localStorage.setItem("personajesRavenclaw", JSON.stringify(personajesRavenclaw));
        arrayRavenclaw.push(...personajesRavenclaw);
        divRavenclaw.innerHTML += `<h2>Ravenclaw</h2>
                                   <img src="imgs/ravenclaw.png" alt="Ravenclaw Crest" ;">
                                   <p>Ravenclaw is one of the four Houses of Hogwarts School of Witchcraft and Wizardry, founded by Rowena Ravenclaw. The house values intelligence, creativity, learning, and wit. Its emblematic animal is the eagle, and its colors are blue and silver (or blue and bronze in the books). The house ghost is the Grey Lady, who is actually Helena Ravenclaw, daughter of Rowena Ravenclaw.</p> <br>
                                   <p>Notable members of Ravenclaw include Luna Lovegood and Cho Chang. Ravenclaw House is known for its emphasis on academic achievement and intellectual pursuits.</p>`;
       /*  for (let personaje of arrayRavenclaw) {
            contenedor.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${personaje.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${personaje.name}</h5>
                    <p class="card-text">House: ${personaje.house}</p>
                    <p class="card-text">Ancestry: ${personaje.ancestry}</p>
                </div>
            </div>
            `;
        } */ 

    } catch (error) {
        console.log("Zone1");
        console.log("Error: " + error);
    }


    
};
obtenerDatos();