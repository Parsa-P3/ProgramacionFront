<?php
// gestionar las peticiones POST
if ( $_SERVER["REQUEST_METHOD"] == "POST"){
    // obtener la accion
    $accion = $_GET["action"] ?? '';

    // campos de comic
    $id = $_GET['id'] ?? null;
    $titulo = $_POST['titulo'] ?? '';
    $autor = $_POST['autor'] ??'';
    $estado = $_POST['estado'] ?? '';
    $localizacion = $_POST['localizacion'] ?? '';
    $prestador = $_POST['prestado'] === 'true' ? true : false;

    
}

// ---- funciones principales de la aplicacion

// function anadirComic(titulo, autor, editorial, anio, numero, imagen)

// function listarComics(titulo, autor)

// function eliminarComic (id)

// function obtenerComic(id)

// function editarComic(id, titulo, autor, editorial, anio, numero, imagen)

// ---- funciones necesarias para el funcionamiento interno de la aplicacion

// function generarIdComic()
// function obtenerElementoMaximo( v1 , v2)

// function cargarJsonComics()

// function guardarJsonComics( listaComics )