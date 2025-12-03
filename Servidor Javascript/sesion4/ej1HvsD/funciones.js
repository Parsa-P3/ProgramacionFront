const urlDragon = 'https://dragonball-api.com/api/characters';
const urlHarry = 'https://hp-api.onrender.com/api/characters';


Promise.all([ fetch(urlHarry) ,fetch(urlDragon)])
// Realiza ambas llamadas fetch en paralelo
    // Espera a que ambas promesas se resuelvan
    .then(respuestas => Promise.all(
    // Convierte ambas respuestas a JSON
        //.map es un bucle que itera sobre cada respuesta
        respuestas.map(respuesta => respuesta.json())))
    // Los datos ya están en formato JSON
    .then(([datosHarry, datosDragon]) => {
        console.log("Datos de Harry Potter: ", datosHarry);
        console.log("Datos de Dragon Ball: ", datosDragon);
    })
    .catch(error => console.log("Error en las llamadas: ", error));

// Utilizando Promise.race para obtener la primera respuesta que se resuelva
Promise.race([  fetch(urlHarry) ,fetch(urlDragon)])
    // Espera a que la primera promesa se resuelva
    .then(respuesta => respuesta.json())
    // Los datos ya están en formato JSON
    .then(datos => {
        console.log("Primera llamada completada: ", datos);
    })
    .catch(error => console.log("Error en la llamada rápida: ", error));
