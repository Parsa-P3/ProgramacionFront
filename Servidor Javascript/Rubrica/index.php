<?php

// obtener valores que necesitaremos para el filtrado
$titulo = $_POST['titulo'] ?? '';
$autor = $_POST['autor'] ??'';

// obtener la lista de comics filtrada
// $comics = listarComics($titulo, $autor);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comics</title>
    <script src="funciones.js"></script>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Formulario  -->
    <form id="myform" name="myform" action="funciones.php" method="post" >
    <input type="text" name="titulo" id="titulo" value="<?= $titulo ?>">
    <input type="text" name="autor" id="autor" value="<?= $autor ?>">
    <input type="text" name="estado" id="estado" >
    <input type="text" name="localizacion" id="localizacion" >
    <input type="text" name="prestado" id="prestado" >

    <!-- seccion principal -->
    <div id="principal">
        <!-- cabecera -->
        <div id="cabecera" class="6columna">
            <div>Titulo</div>
            <div>Autor</div>
            <div>Estado</div>
            <div>Localizacion</div>
            <div>Prestado</div>
            <div>Acciones</div>
        </div>

        <!-- seccion filtro -->
        <div id="filtro" class="6columna">
            <!-- filtro por titulo , cuando escribe algo usuario empieza a filtrar -->
            <div><input type="text" value="<?= $filTitulo ?>" id="filTitulo" onchange="filtrar()" placeholder="Buscar por Título"></div>
            <!-- div ? -->
             <div>
                    <!-- filtro por estado , cuando interactura el usuario con opciones empieza a filtrar -->
                    <select name="estado" onchange="filtrar()">
                        <option value="">--Estado--</option>
                        <!-- en cada opcion comprobamos si esta elegido -->
                        <option value="pendiente de leer" <?= $filEstado === 'pendiente de leer' ? 'selected' : '' ?>>pendiente</option>
                        <option value="leyendo" <?= $filEstado === 'leyendo' ? 'selected' : '' ?>>leyendo</option>
                        <option value="leido" <?= $filEstado === 'leido' ? 'selected' : '' ?>>leído</option>
                   </select>
             </div>
            <!-- div ? -->
            <!-- div ? -->
            <!-- div ? -->

        </div>

        <div class="anadirlinea 6columna">
            <div><input type="text" id="nuevoTitulo" value="" placeholder="Nuevo Titulo"></div>
            <div><input type="text" id="nuevoAutor" value="" placeholder="Autor"></div>
            <div>
                <select id="nuevoEstado">
                    <option value="pendiente de leer">pendiente</option>
                    <option value="leyendo">leyendo</option>
                    <option value="leido">leído</option>
                </select>
            </div>
            <div>
                <select id="NuevoLocalizacion">
                    <option value="estanteria1">estanteria1</option>
                    <option value="estanteria2">estanteria2</option>
                    <option value="mueble">mueble</option>
                </select>
            </div>
            <div><input type="checkbox" id="prestado0" /></div>
            <div>
                <input type="button" onclick="anadir();" value="ADD">
            </div>
            

        </div>







    </div>
    
  </form>

</body>
</html>