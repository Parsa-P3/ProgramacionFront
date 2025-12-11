const urlDragon = 'https://dragonball-api.com/api/characters';
const urlHarry = 'https://hp-api.onrender.com/api/characters';


Promise.all([ fetch(urlHarry) ,fetch(urlDragon)])
// Realiza ambas llamadas fetch en paralelo
    .then(respuestas => Promise.all(
        //.map es un bucle que itera sobre cada respuesta
        respuestas.map(respuesta => respuesta.json())))
    .then(([datosHarry, datosDragon]) => {
        console.log("Datos de Harry Potter: ", datosHarry);
        console.log("Datos de Dragon Ball: ", datosDragon);
    })
    .catch(error => console.log("Error en las llamadas: ", error));




// Utilizando Promise.race para obtener la primera respuesta que se resuelva
Promise.race([  fetch(urlHarry) ,fetch(urlDragon)])
    .then(respuesta => respuesta.json())
    .then(datos => {
        console.log("Primera llamada completada: ", datos);
    })
    .catch(error => console.log("Error en la llamada rápida: ", error));
