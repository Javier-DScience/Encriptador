function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let grafica = document.getElementById("grafica");

    let textoCifrado = texto
        .replace(/e/gi, "enter")    
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
if (document.getElementById("texto").value.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con exito";
    parrafo.textContent = "";
    grafica.src = "muñeco.png";
} else {
    grafica.src = "muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Ingresa algun texto");
    }    
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo_mensaje");
    let parrafo = document.getElementById("parrafo");
    let grafica = document.getElementById("grafica");
    
    let textoCifrado = texto
    .replace(/enter/gi, "e")    
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

if (document.getElementById("texto").value.length != 0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con exito";
    parrafo.textContent = "";
    grafica.src = "muñeco.png";
} else {
    grafica.src = "muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
    alert("Ingresa algun texto");
}
}

function copiar() {
    let textarea = document.getElementById("texto");
    let texto = textarea.value;
    navigator.clipboard.writeText(texto)
    .then(() => {
        alert("Texto copiado");
    })
    . catch(err => {
        console.error("Error al copiar" + err);
    });
}