document.getElementById("btnConvertir").addEventListener("click", function () {
    const km = document.getElementById("kilometros");
    const mil = document.getElementById("millas");
    const valor = km.value.trim();
    if (valor === "" || isNaN(valor)) {
        alert("Por favor, ingresa un número válido para los kilómetros.");
        entradaMillas.value = "";
        return;
    }
    const kilometros = parseFloat(valor);
    const millas = kilometros * 0.621371; 
    mil.value = millas.toFixed(5);
});