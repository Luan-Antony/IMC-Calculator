document.getElementById("calcular").addEventListener("click", function() {
    const nome = document.getElementById("nome").value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);
    const resultado = document.getElementById("resultado");

    if(!nome || !altura || !peso) {
        resultado.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);

    let classificacao = "";

    if(imc < 18.5) {
        classificacao = "Abaixo do peso";
    }else if(imc < 24.9) {
        classificacao = "Com peso normal";
    }else if(imc < 29.9) {
        classificacao = "com sobrepeso";
    }else {
        classificacao = "Com obesidade";
    }

    resultado.textContent = `${nome}, seu IMC é ${imc} e voce está ${classificacao}.`
})
