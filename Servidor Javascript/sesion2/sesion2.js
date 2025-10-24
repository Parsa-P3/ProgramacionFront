function variable (){
    var no_es_bloque="hola";
    console.log("no_es_bloque",no_es_bloque);

    if(true){
        let es_bloque ="bloque";
        console.log("es_bloque_dentro", es_bloque);
    }

    //console.log("es_bloque_fuera",es_bloque);
    
    return true;
}

function concaternar(){
    let cadena = "1";
    let num1 = 1;
    let num2 = 2;

    let conc = cadena + num1;
    let suma = num1 + num2;

    console.log("conc:", conc);
    console.log("suma:", suma);
    
}

// exportacion de la funciones
module.exports ={variable,concaternar};