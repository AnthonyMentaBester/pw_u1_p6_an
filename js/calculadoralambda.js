const sumar = (idNum1, idNum2) => {
    var num1 =  parseInt(document.getElementById(idNum1).value);
    var num2 =  parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 + num2;
    console.log(respuesta);
    document.getElementById("id_resultado").innerText = respuesta;

}

const restar = (idNum1, idNum2) => {
    var num1 =  parseInt(document.getElementById(idNum1).value);
    var num2 =  parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 - num2;
    console.log(respuesta);
    document.getElementById("id_resultado").innerText = respuesta;

}

const multiplicar = (idNum1, idNum2) => {
    var num1 =  parseInt(document.getElementById(idNum1).value);
    var num2 =  parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 * num2;
    console.log(respuesta);
    document.getElementById("id_resultado").innerText = respuesta;

}

const dividir = (idNum1, idNum2) => {
    var num1 =  parseInt(document.getElementById(idNum1).value);
    var num2 =  parseInt(document.getElementById(idNum2).value);
    var respuesta = num1 / num2;
    console.log(respuesta);
    document.getElementById("id_resultado").innerText = respuesta;

}

function agregarElemento() {
    document.getElementById('id_division').innerHTML="<button>NUEVO</button>";
    
}

function quitarElemento() {
    document.getElementById('id_division').innerHTML="";
    
}


/* TIPOS DE DATOS JS */
/*LET,VAR , CONST */
function conceptosJS() {
    const IVA = 15;
    console.log(IVA)
    /*no se puede soobreescribir a la constante
    IVA = 15
    console.log(IVA)*/

    var nombre = "Edison";
    console.log(nombre);

    nombre = "Anthony";
    console.log(nombre);

    let apellido = "Cayambe";
    console.log(apellido);
    apellido = "Narvaez"
    console.log(apellido)

}
