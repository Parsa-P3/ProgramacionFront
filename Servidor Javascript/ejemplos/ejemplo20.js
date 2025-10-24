

// Fichero miLibreria.js

function saludar(usuario) {
  console.log(`Hola, ${usuario}`);
}

function secreto() {
  console.log("Ssssshh... es un secreto...");
}

function despedir(usuario) {
  secreto();
  console.log(`Adiós, ${usuario}`);
}

export { saludar, despedir };


