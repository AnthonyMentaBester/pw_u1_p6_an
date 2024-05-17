var op = "";
var numero1 = "";
var numero2 = "";
var operador = "";
var respuesta = "";


function vaciar() {
    const display = document.getElementById("id_display");
    display.innerText = "0";
    numero1 = "";
    numero2 = "";
    op = "";
    respuesta = "";
}

function numeroPoner(value) {
    const display = document.getElementById("id_display");
    if (display.innerText === "0" || display.innerText === respuesta.toString()) {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function borrar() {
    const display = document.getElementById("id_display");

    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}


function operar(value) {
    const display = document.getElementById("id_display");
    if (numero1 === "") {
        numero1 = display.innerText;
    } else if (respuesta !== "") {
        numero1 = respuesta.toString();
    }
    op = value;
    display.innerText = "0";
}

function calcular() {

    const display = document.getElementById("id_display");
    numero2 = display.innerText;

    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    switch (op) {
        case "+":
            respuesta = num1 + num2;
            break;
        case "-":
            respuesta = num1 - num2;
            break;
        case "*":
            respuesta = num1 * num2;
            break;
        case "%":
            if (num2 === 0) {
                respuesta = "ERROR";
            } else {
                respuesta = num1 / num2;
            }
            break;
        default:
            respuesta = "ERROR";
    }

    display.innerText = `${numero1} ${op} ${numero2} = ${respuesta}`;
    numero1 = "";
    numero2 = "";
    op = "";
}
    
