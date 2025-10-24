import {coche} from './coche.js';

class cocheElectrico extends coche {
  constructor(marca, modelo,anyo , autonomia) {
    super(marca, modelo , anyo); // Llama al constructor de la clase padre
    this.autonomia = autonomia;

  }

  mostrarinfo() {
    super.mostrarinfo(); // Llama al método de la clase padre
    console.log(`Autonomía: ${this.autonomia} km`);
  }
}

export{cocheElectrico};