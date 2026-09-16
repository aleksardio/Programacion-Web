document.getElementById("btnCalcular").addEventListener("click", function () {
    const nums = document.getElementById("numeros");
    const mayor = document.getElementById("mayor");
    const menor = document.getElementById("menor");
    const prom = document.getElementById("promedio");
    const valor = nums.value.trim();
    if (valor === "") {
        alert("Por favor, ingresa al menos un número.");
        return;
    }
    let arregloCadenas = valor.split(",");
    let numerosArray = arregloCadenas.map(Number);
    if (numerosArray.includes(NaN)) {
        alert("Asegúrate de ingresar solo números válidos separados por comas.");
        mayor.value = "";
        menor.value = "";
        prom.value = "";
        return;
    }
    let maximo = Math.max(...numerosArray);
    let minimo = Math.min(...numerosArray);
    let suma = numerosArray.reduce((acc, valorActual) => acc + valorActual, 0); 
    let promedio = suma / numerosArray.length;
    mayor.value = maximo;
    menor.value = minimo;
    prom.value = Number.isInteger(promedio) ? promedio : promedio.toFixed(2);
});