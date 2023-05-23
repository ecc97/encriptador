import { cambiarTema } from "./tema.js";

var entrada = document.querySelector("#campo-entrada");
var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var encriptado = document.querySelector("#campo-encriptado");
var copiar = document.querySelector("#copiar");
var mensajene = document.querySelector(".mensaje-vacio"); 
var msgc = document.querySelector("#mensaje-copiado")

function mostrarTextoEncriptado(){
    var strcampo = entrada.value;
    var resultadoEnc = strcampo.toLowerCase().replace(/[aeiou]/gi, function(match) {
        switch(match) {
            case "a":
                return "ai";
            case "e":
                return "enter";
            case "i":
                return "imes";
            case "o":
                return "ober";
            case "u":
                return "ufat";
        }
    }).toLowerCase().replace(/[áéíóú]/gi, function(match) {
        switch(match) {
            case "á":
                return "ai";
            case "é":
                return "enter";
            case "í":
                return "imes";
            case "ó":
                return "ober";
            case "ú":
                return "ufat";
        }
    }).replace(/[^\w\s.,()¿?¡!]/g, "");
    if(strcampo != ""){
        encriptado.value = resultadoEnc;
        entrada.value = "";
        mensajene.style.display = "none";
        copiar.style.display = "block";
        
    }else{
        encriptado.value = "";
        mensajene.style.display = "flex";
        copiar.style.display = "none";
    }
}

function mostrartextoOriginal(){
    var strcampoE = entrada.value;
    var resultOrigin = strcampoE.replace(/ai|enter|imes|ober|ufat/gi, function(match){
        switch(match) {
            case "ai":
                return "a";
            case "enter":
                return "e";
            case "imes":
                return "i";
            case "ober":
                return "o";
            case "ufat":
                return "u";
        }
    });
    if(strcampoE != ""){
        encriptado.value = resultOrigin;
        entrada.value = "";
        mensajene.style.display = "none";
        copiar.style.display = "block";
    }else{
        encriptado.value = "";
        mensajene.style.display = "flex";
        copiar.style.display = "none";
    }
}

function copiarTexto(){
  var txta = document.createElement("input");
  txta.setAttribute("value", encriptado.value);
  document.body.appendChild(txta);
  txta.select();
  document.execCommand("copy");
  document.body.removeChild(txta);
    
  msgc.style.height = "32px";
  msgc.style.visibility = "visible";
  
  setTimeout(ocultarmsgc, 1000);
}

function ocultarmsgc(){
    msgc.style.height = "0px";
    msgc.style.visibility = "hidden";
}

encriptar.onclick = mostrarTextoEncriptado;
desencriptar.onclick = mostrartextoOriginal;
copiar.onclick = copiarTexto;