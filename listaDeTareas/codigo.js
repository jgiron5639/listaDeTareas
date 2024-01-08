function agregarTarea() {
    var inputTarea = document.getElementById('nuevaTarea');
    var tarea = inputTarea.value;

    if (tarea.trim() !== '') {
      var tabla = document.getElementById('cuerpoTabla');
      var nuevaFila = tabla.insertRow();

      var celdaTarea = nuevaFila.insertCell(0);
      celdaTarea.innerHTML = tarea;

      var celdaAcciones = nuevaFila.insertCell(1);
      celdaAcciones.innerHTML = '<button onclick="editarTarea(this)">Editar</button> <button onclick="eliminarTarea(this)">Eliminar</button>';

      inputTarea.value = ''; // Limpiar el campo de entrada después de agregar la tarea
    } else {
      alert('Por favor, ingrese una tarea válida.');
    }
  }

  function editarTarea(button) {
    var row = button.parentNode.parentNode;
    var tarea = row.cells[0];
    var nuevaTarea = prompt('Editar tarea:', tarea.innerHTML);
    if (nuevaTarea !== null && nuevaTarea.trim() !== '') {
      tarea.innerHTML = nuevaTarea;
    }
  }

  function eliminarTarea(button) {
    var row = button.parentNode.parentNode;
    var confirmarEliminar = confirm('¿Está seguro que desea eliminar esta tarea?');
      if (confirmarEliminar) {
        row.parentNode.removeChild(row);
      }
    }

     // Cargar tareas almacenadas en localStorage al cargar la página
     window.onload = function() {
        var tareas = JSON.parse(localStorage.getItem('tareas'));
        if (tareas) {
          tareas.forEach(function(tarea) {
            agregarTareaDOM(tarea);
          });
        }
      };