function ejemplo(){
    // prompt no funciona porque lo estamos ejecutando en node y no en un navegador
    //let edad = prompt("Dime tu edad"); // El usuario introduce 40 
    let edad = 45;

    let edadMasDiez = edad + 10; 
    console.log(edadMasDiez); // "4010" en lugar de 50
    return edadMasDiez;
}

module.exports = {ejemplo};