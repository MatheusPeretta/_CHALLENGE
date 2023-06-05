// lógica As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

var textoInserido = document.querySelector("#input-text");
var outPut = document.querySelector("#output");

function criptografar(){
    var texto = textoInserido.value;
    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-text" class="mensagem2">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}

function descriptografar(){
    var texto = textoInserido.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readonly id="input-text" class="mensagem2">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>'
}


function copiar(){
    var textoCop = document.getElementById("input-text");

    textoCop.select();
    document.execCommand('Copy');
    alert("Texto Copiado");
}
