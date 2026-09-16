document.getElementById("btnConvertir").addEventListener("click", function () {
    const peso = document.getElementById("pesos");
    const dls = document.getElementById("dolares");
    const valor = peso.value.trim();
    if (valor === "" || isNaN(valor) || parseFloat(valor) < 0) {
        alert("Por favor, ingresa una cantidad numérica y positiva en pesos mexicanos.");
        dls.value = "";
        return;
    }
    const pesos = parseFloat(valor);
    const tasa= 0.055;
    const dolares = pesos * tasa;
    dls.value = dolares.toFixed(2);
});