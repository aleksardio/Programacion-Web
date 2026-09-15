document.getElementById("btnConvertir").addEventListener("click", function () {
    const entradaCelsius = document.getElementById("celsius"); 
    const entradaResultado = document.getElementById("resultado");
    const valor = entradaCelsius.value.trim();
    if (valor === "" || isNaN(valor)) { 
        alert("Por favor, ingresa un número válido en grados Celsius.");
        entradaResultado.value = "";
        return;
    }
    const celsius = parseFloat(valor);
    const fahrenheit = (celsius * 9 / 5) + 32;
    entradaResultado.value = fahrenheit.toFixed(2) + " °F";
});