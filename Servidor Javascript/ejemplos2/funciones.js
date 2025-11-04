import { Meses } from './datosej2.js';

const form = document.getElementById('formCalendario');
Meses.forEach(mes => console.log(mes.nombre, mes.dias));

const boton = document.getElementById('btanio');

boton.addEventListener('click', () => {
    const anio = document.getElementById('anio').value;
    console.log("Año seleccionado:", anio);

    Meses.forEach(mes => {
        for (let i = 1; i <= mes.dias; i++) {
            const date = `${anio}-${("0" + (Meses.indexOf(mes) + 1)).slice(-2)}-${i}`;
            console.log(date, mes.nombre);
        }
    });

});
/*
Meses.indexOf(mes)
Meses es un array de objetos (cada mes).
mes es el objeto actual del forEach.
indexOf(mes) devuelve el índice del mes dentro del array.

+ 1 ----> Sumamos 1 porque los meses en un calendario van de 1 a 12, no de 0 a 11.

"0" + (...) ----> Esto convierte el número en string y añade un cero delante.

slice(-2) ----> toma los últimos 2 caracteres del string.
*/