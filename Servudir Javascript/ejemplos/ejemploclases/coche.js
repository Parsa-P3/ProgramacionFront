class coche {

  constructor(marca,modelo , anyo ) {
    this.marca = marca; 
    this.modelo = modelo;
    this.anyo = anyo;


  }

  mostrarinfo() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anyo}`);
  }
}

export {coche};