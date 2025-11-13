// archivo server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const sesion2 = require('./sesion2/sesion2');
const path = require('path');
const ejemplos = require('./ejemplo');

// Middleware para servir archivos estáticos
//app.use(express.static('public'));

// Ruta principal
app.get('/', (req, res) => {
  res.send(`<h1>Servidor con Express funcionando </h1>`);
});

// ++SESIÓN 2
app.get('/variables', (req, res) => {
  const resultado = sesion2.variables();
  res.send(`La variable pinta ${resultado}`);
});

app.get('/concatenar', (req, res) => {
  const resultado = sesion2.concatenar();
  // res.send(`La variable pinta ${resultado}`);
  res.send(true);
});

app.get('/ejemplos', (req, res) => {
  const resultado = ejemplos.ejemplo1();
  res.send(`La variable pinta ${resultado} años`);
});
// --SESIÓN 2


// Arrancar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

app.get('/ejemplohtml',(req,res) =>{
  res.sendFile(path.join(__dirname, '','index2.html'));
})

app.use('/ejemplos', express.static(path.join(__dirname, 'ejemplos')));


app.get('/ejemplos/ejemploclases/main',(req,res) =>{
  res.sendFile(path.join(__dirname, 'ejemplos/ejemploclases','main.html'));
})

app.get('/ejemplos/ejemplo22',(req,res) =>{
  res.sendFile(path.join(__dirname, 'ejemplos','ejemplo22.html'));
})

app.get('/paises', (req, res) => {
  res.sendFile(path.join(__dirname,'', 'paises.json'));
});

app.get('/sesion2/ejerciciobucle', (req, res) => {
  res.sendFile(path.join(__dirname,'sesion2' , 'ejerciciobucle.html'));
});

app.get('/ejemplos/ejemplo1',(req,res) =>{
  res.sendFile(path.join(__dirname, 'ejemplos','ejemplo1.html'));
})

app.use('/ejemplos2', express.static(path.join(__dirname, 'ejemplos2')));

app.get('/ejemplos2',(req,res) =>{
  res.sendFile(path.join(__dirname, 'ejemplos2','main.html'));
})

app.use('/ejs/ejemploStarwars', express.static(path.join(__dirname, '/ejs/ejemploStarwars')));
app.use('/ejs', express.static(path.join(__dirname, '/ejs')));

app.get('/ejs/ejemploStarwars',(req,res) =>{
  res.sendFile(path.join(__dirname, 'ejs/ejemploStarwars','index.html'));
})



app.use('/ejs/ejermploTareasS2', express.static(path.join(__dirname, '/ejs/ejermploTareasS2')));
app.use('/ejs', express.static(path.join(__dirname, '/ejs')));

app.get('/ejs/ejermploTareasS2',(req,res) =>{
  res.sendFile(path.join(__dirname, 'ejs/ejermploTareasS2','index.html'));
})

app.use('/Rubrica', express.static(path.join(__dirname, '/Rubrica')));

app.get('/Rubrica',(req,res) =>{
  res.sendFile(path.join(__dirname, 'Rubrica','index.php'));
})


