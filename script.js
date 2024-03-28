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
    
    if (imc <= 18.5) {
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Você está abaixo do peso."
    }
    else if (imc > 18.5 && imc <= 24.9){
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Seu peso está ok."
    }
    else if (imc > 24.9 && imc <= 29.9){
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Você está com sobrepeso."
    }
    else if (imc > 29.9 && imc <= 34.9){
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Obesidade nível I."
    }
    else if (imc > 34.9 && imc <= 40){
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Obesidade nível II."
    }
    else if (imc > 40){
        resultado.innerHTML = "IMC: " + imc.toFixed(2) + "<br> Obesidade nível III."
    }
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
}
