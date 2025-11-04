let tareas=[];
function anadir(){
    let tarea=document.getElementById('tarea').value;
    let estado=document.getElementById('estado').value;

    let id =obtenerElementoMaximo('id');
    id+=1;

    let nueTarea={
        id:id,
        tarea:tarea,
        estado:estado
    }

    tareas.push(nueTarea);
    console.log("Listado de tareas",tareas);
}


function modificar(){
   let tarea=document.getElementById('tarea').value;
   let estado=document.getElementById('estado').value;
   let id=document.getElementById('id').value;

  
   for (let tar of tareas){
        if(tar.id===parseInt(id)){
            tar.tarea=tarea;
            tar.estado=estado;
        }
   }

   console.log("Listado de tareas",tareas);
}

function eliminar(){
   let id=document.getElementById('id').value;
   tareas=tareas.filter(x=> x.id!=id);
   console.log("Listado de tareas",tareas);
    
}

// Función para obtener el elemento máximo según una propiedad
function obtenerElementoMaximo(propiedad) {
    if (!tareas || tareas.length === 0) {
        return 0;
    }
    // Usamos reduce para encontrar el objeto con el valor máximo de la propiedad
    const maximo = tareas.reduce((a, b) => {
        if (!a) return b;
        return (b[propiedad] > a[propiedad]) ? b : a;
    }, 0);

    return maximo[propiedad];
}

// Función para generar un ID de tarea libre
function generarIdTarea(tareas) {
    let id = 0;

    // Obtengo el máximo ID actual
    const maximo = obtenerElementoMaximo(tareas, 'id') || 0;

    // Recorro desde 1 hasta el máximo para encontrar el primer ID libre
    for (let i = 1; i <= maximo; i++) {
        const existe = tareas.find(tarea => tarea.id === i);
        if (!existe) {
            id = i;
            break;
        }
    }

    // Si no encontramos ningún ID libre, el siguiente es maximo + 1
    if (id === 0) {
        id = maximo + 1;
    }

    return id;
}


