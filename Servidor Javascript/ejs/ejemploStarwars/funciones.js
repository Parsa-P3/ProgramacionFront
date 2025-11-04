import { sw } from '../datos.js'

let lista = [...sw['results']];
let nueva = lista.filter(nave => nave.passengers > 100);
let listaFinal = nueva.map(nave => ({name : nave.name , modelo: nave.model}));

console.log(lista.map(nave => ({name : nave.name , passengers : nave.passengers})));

console.log(listaFinal);

let nueva2 = lista.filter(nave => (nave.passengers <= 100 || nave.passengers == "unknown"));
let final = nueva2.map(nave =>({name : nave.name ,  passengers : nave.passengers}));
console.log(final);