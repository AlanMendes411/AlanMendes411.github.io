//IMC = peso / altua * altua
//menor que 16 = muito abaixo do peso
//menor que 18 = magro
//entre 18 e 24 = nomral
//entre 25 e 29 = sobrepeso
//entre 30 e 40 obesidade
//maior que 40 = obesidade morbida 

var peso;
var altura;
var imc;
var resultado;

function calcular(event){
    event.preventDefault();

    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value;

    imc = peso / (altura * altura);
    resultado = document.getElementById("resultado");
    
    if (imc < 16) {
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Você está muito abaixo do peso."
    }
    else if (imc > 16 && imc <= 18){
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Você está magro."
    }
    else if (imc > 18 && imc <= 24){
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Seu peso está ok."
    }
    else if (imc > 24 && imc <= 29){
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Você está com sobrepeso."
    }
    else if (imc > 30 && imc <= 40){
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Você está obeso."
    }
    else if (imc > 40){
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Você está muito acima do peso."
    }
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}