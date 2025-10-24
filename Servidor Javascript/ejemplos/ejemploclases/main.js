import {coche } from './coche.js';
import {cocheElectrico } from './cocheElectrico.js';

fetch('./coches.json')
  .then(response => response.json())
  .then(datos => {
    console.log(datos);
  
    datos.forEach(item => {
      let cocheNuevo;
      if (item.electrico) {
 
        cocheNuevo = new cocheElectrico(item.marca, item.modelo, item.anyo, item.autonomia);
      } else {
  
        cocheNuevo = new coche(item.marca, item.modelo, item.anyo);
      }

     
      cocheNuevo.mostrarinfo();
      console.log('-----------------');
    });
  });