const manejarTareas = (() => {
        const obtenerTareas = () => {
        const tareasJSON = localStorage.getItem("tareas_ej17");
        return tareasJSON ? JSON.parse(tareasJSON) : [];
    };
    const guardarTareas = (tareas) => {
        localStorage.setItem("tareas_ej17", JSON.stringify(tareas));
    };
    return {
        agregar: (textoTarea) => {
            const tareas = obtenerTareas();
            tareas.push({ id: Date.now(), texto: textoTarea });
            guardarTareas(tareas);
        },
        eliminar: (id) => {
            let tareas = obtenerTareas();
            tareas = tareas.filter(tarea => tarea.id !== id);
            guardarTareas(tareas);
        },
        obtenerTodas: () => {
            return obtenerTareas();
        }
    };
})();
const renderizarTareas = () => {
    const lista = document.getElementById("listaTareas");
    lista.innerHTML = "";
    
    const tareas = manejarTareas.obtenerTodas();

    if (tareas.length === 0) {
        lista.innerHTML = '<li class="mensaje-vacio">No hay tareas pendientes.</li>';
        return;
    }
    tareas.forEach(tarea => {
        const li = document.createElement("li");
        const spanTexto = document.createElement("span");
        spanTexto.textContent = tarea.texto;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");
        btnEliminar.addEventListener("click", () => {
            Swal.fire({
                title: '¿Estás seguro?',
                text: `Se eliminará la tarea: "${tarea.texto}"`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#e2402e',
                cancelButtonColor: '#9fa2a2',
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    manejarTareas.eliminar(tarea.id);
                    renderizarTareas();
                    Swal.fire('Eliminada', 'La tarea ha sido borrada.', 'success');
                }
            });
        });

        li.appendChild(spanTexto);
        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
};
document.getElementById("btnAgregar").addEventListener("click", () => {
    const inputTarea = document.getElementById("nuevaTarea");
    const texto = inputTarea.value.trim();

    if (texto === "") {
        Swal.fire({
            icon: 'error',
            title: 'Campo vacío',
            text: 'Por favor, escribe una tarea antes de agregarla.'
        });
        return;
    }
    manejarTareas.agregar(texto);
    inputTarea.value = "";
    inputTarea.focus();
    renderizarTareas();
});
document.addEventListener("DOMContentLoaded", () => {
    renderizarTareas();
});