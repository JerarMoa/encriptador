var botonEncriptar = document.getElementById("btnEncriptar");
var botonDesencriptar = document.getElementById("btnDesencriptar");
var botonCopiar = document.getElementById("btnCopiar");
var munheco = document.getElementById("munheco");
var textoNoEncontrado = document.getElementById("noEncontrado");
var encriptado = document.getElementById("textoEncriptado");

function ocultar() {
    munheco.classList.add("ocultar");
    textoNoEncontrado.classList.add("ocultar")
}

function llamarTexto() {
    var textarea = document.getElementById("textarea");
    return textarea.value;
}

function encriptar() {
    ocultar();
    encriptado.textContent = encriptarTexto(textarea.value)
}

function desencriptar() {
    ocultar();
    encriptado.textContent = desencriptarTexto(textarea.value)
}

function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoResultado = "";

    for (i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoResultado = textoResultado + "ai"
        }

        else if (texto[i] == "e") {
            textoResultado = textoResultado + "enter"
        }

        else if (texto[i] == "i") {
            textoResultado = textoResultado + "imes"
        }

        else if (texto[i] == "o") {
            textoResultado = textoResultado + "ober"
        }

        else if (texto[i] == "u") {
            textoResultado = textoResultado + "ufat"
        }
        else {
            textoResultado = textoResultado +texto[i];
        }
    }

    return textoResultado;
}

function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoResultado = "";

    for (i = 0; i < texto.length; i++) {
        if (texto[i] == "a") {
            textoResultado = textoResultado + "a"
            i = i + 1;
        }

        else if (texto[i] == "e") {
            textoResultado = textoResultado + "e"
            i = i + 4;
        }

        else if (texto[i] == "i") {
            textoResultado = textoResultado + "i"
            i = i + 3;
        }

        else if (texto[i] == "o") {
            textoResultado = textoResultado + "o"
            i = i + 3;
        }

        else if (texto[i] == "u") {
            textoResultado = textoResultado + "u"
            i = i + 3;
        }
        else {
            textoResultado = textoResultado +texto[i];
        }
    }

    return textoResultado;
}

function copiar(){
    swal("¡Copiado!", "Texto copiado en el portapapeles", "success");
    let contenido = document.querySelector('#textoEncriptado').innerHTML;
    navigator.clipboard.writeText(contenido);
}

botonCopiar.onclick = copiar;
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;