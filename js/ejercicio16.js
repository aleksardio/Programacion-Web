const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (operacion) => {
    const enNum1 = document.getElementById("numero1").value.trim();
    const enNum2 = document.getElementById("numero2").value.trim();
    const res = document.getElementById("resultado");

    if (enNum1 === "" || enNum2 === "" || isNaN(enNum1) || isNaN(enNum2)) {
        Swal.fire({
            icon: 'error',
            title: 'Datos inválidos',
            text: 'Por favor, ingresa números válidos en ambos campos.',
            confirmButtonColor: '#c0392b'
        });
        res.value = "";
        return;
    }
    const num1 = parseFloat(enNum1);
    const num2 = parseFloat(enNum2);
    let resFinal;
    switch (operacion) {
        case 'suma':
            resFinal = sumar(num1, num2);
            break;
        case 'resta':
            resFinal = restar(num1, num2);
            break;
        case 'multiplicacion':
            resFinal = multiplicar(num1, num2);
            break;
        case 'division':
            resFinal = dividir(num1, num2);
            if (typeof resFinal === 'string') {
                Swal.fire({
                    icon: 'warning',
                    title: 'Operación no permitida',
                    text: resFinal,
                    confirmButtonColor: '#c0392b'
                });
                res.value = "Error";
                return;
            }
            break;
    }
    res.value = Number.isInteger(resFinal) ? resFinal : resFinal.toFixed(4);
};

document.getElementById("btnSumar").addEventListener("click", () => calcularOperacion('suma'));
document.getElementById("btnRestar").addEventListener("click", () => calcularOperacion('resta'));
document.getElementById("btnMultiplicar").addEventListener("click", () => calcularOperacion('multiplicacion'));
document.getElementById("btnDividir").addEventListener("click", () => calcularOperacion('division'));