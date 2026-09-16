document.getElementById("btnVerificar").addEventListener("click", function () {
    const anios = document.getElementById("edad");
    const res = document.getElementById("resultado");
    const valor = anios.value.trim();
    if (valor === "" || isNaN(valor) || parseInt(valor) < 0) {
        alert("Por favor, ingresa una edad válida (número positivo).");
        res.value = "";
        return;
    }
    const edad = parseInt(valor);
    if (edad >= 18) {
        res.value = "Puedes votar";
    } else {
        res.value = "No puedes votar";
    }
});