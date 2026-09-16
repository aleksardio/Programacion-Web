let estudiantes = [];
document.getElementById("btnAgregar").addEventListener("click", function () {
    const nom = document.getElementById("nombre");
    const calf = document.getElementById("calificacion");
    const nombre = nom.value.trim();
    const valorcalf = calf.value.trim();

    if (nombre === "" || valorcalf === "" || isNaN(valorcalf)) {
        alert("Por favor, ingresa un nombre y una calificación válida.");
        return;
    }

    const calificacion = parseFloat(valorcalf);
    estudiantes.push({ nombre: nombre, calificacion: calificacion });
    nom.value = "";
    calf.value = "";
    nom.focus();
    console.log(`Estudiante agregado: ${nombre}`);
});

document.getElementById("btnCalcular").addEventListener("click", function () {
    const prom = document.getElementById("promedio");
    const calfAlta = document.getElementById("masAlta");
    const calfBaja = document.getElementById("masBaja");
    if (estudiantes.length === 0) {
        alert("No hay estudiantes en la lista. Agrega al menos uno.");
        return;
    }
    let suma = estudiantes.reduce((total, estudiante) => total + estudiante.calificacion, 0);
    let promedio = suma / estudiantes.length; 

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion)); 
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion)); 

    let estudianteMaximo = estudiantes.find(e => e.calificacion === calificacionMaxima).nombre;
    let estudianteMinimo = estudiantes.find(e => e.calificacion === calificacionMinima).nombre;

    prom.value = promedio.toFixed(2);
    calfAlta.value = estudianteMaximo;
    calfBaja.value = estudianteMinimo;
});