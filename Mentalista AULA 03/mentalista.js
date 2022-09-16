//A função abaixo serve para pegarmos o valor que vai ser inserido no input.
function chutar() {
    let numeroSecreto = parseInt(Math.random() * 11);
    let resultado = document.getElementById("resultado");
    let chute = parseInt(document.getElementById("input-element").value);
    
    //Verificar se o chute é igual ao número secreto
    if (chute == numeroSecreto) {
        resultado.innerHTML = "Você acertou!"
        console.log("Acertou!")
    }
    else if (chute > 10) {
        resultado.innerHTML = "Escolha um número de 0 a 10"
        console.log("Maior que 10")
    }
    else if (chute < 0) {
        resultado.innerHTML = "Escolha um número de 0 a 10"
        console.log("Menor que 0")
    }
    /*
    Ambas as condiçoes podem ser colocadas no mesmo else if:
    else if (chute > 10 || chute < 10 ) {
        console.log("O número deve estar entre 0 e 10")
    }
    */
    else {
        resultado.innerHTML = "Errou! O número secreto era " + numeroSecreto;
        console.log("Errou!")
    }
}



//Quero por um código para que quando a pessoa de o primeiro palpite o input seja resetado.