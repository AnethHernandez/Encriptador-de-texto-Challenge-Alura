
var botonEncriptar = document.querySelector('.boton-encriptar');
var botonDesencriptar = document.querySelector('.boton-desencriptar');
var imagenPersona = document.querySelector('.imagen-persona');
var h2Seccion2 = document.querySelector('.h2-seccion2');
var parrafoSeccion2 = document.querySelector('.parrafo-seccion2');
var resultado = document.querySelector('.area-result');


var h3 = document.querySelector('.h3-resultado');
var botonCopiar =  document.querySelector('.boton-copiar');



botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;


function encriptar() {
    ocultarSeccion2()
    var campoTexto = recopilarTexto()
    resultado.textContent = encriptarTexto(recopilarTexto())
}

function desencriptar() {
    ocultarSeccion2()
    var campoTexto = recopilarTexto()
    resultado.textContent = desencriptarTexto(recopilarTexto()) 
}

function recopilarTexto() {
    var campoTexto = document.querySelector('.campo-texto');
    return campoTexto.value;
}

function ocultarSeccion2() {
    imagenPersona.classList.add('ocultar');
    h2Seccion2.classList.add('ocultar');
    parrafoSeccion2.classList.add('ocultar');

    h3.style.visibility = "visible";
    resultado.style.visibility = "visible";
    botonCopiar.style.visibility ="visible";
}
    
function encriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal ="";
    var frase = document.getElementById("campoTexto").value.toLowerCase();
    

    for(var i = 0; i< texto.length; i++){
        if(texto[i] == "a") {
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        
        }
    }
    return textoFinal;
}


function desencriptarTexto(mensaje) {
    var texto = mensaje;
    var textoFinal ="";
    var frase = document.getElementById("campoTexto").value.toLowerCase();
    

    for(var i = 0; i< texto.length; i++){
        if(texto[i] == "a") {
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e") {
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i") {
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o") {
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u") {
            textoFinal = textoFinal + "u"
            i = 1+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
    return textoFinal;
} 

botonCopiar.addEventListener("click", () => {
    let copiar = resultado;
    resultado.select();
    document.execCommand("copy")
    alert("Texto copiado");
})



/* const btnCopiar = document.querySelector('.boton-copiar');
    btnCopiar.addEventListener("click" , copiar= copiar = () => {
    var resultado = document.querySelector(".area-result").textContent;
    navigator.clipboard.writeText(resultado);
    alert("Texto copiado")
        
})  */
 
 


