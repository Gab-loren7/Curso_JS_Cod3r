/* Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false */

let verificarNumero = (numeroInteiro) => {
    if (numeroInteiro % 3 === 0) {
        return `O númro ${numeroInteiro} é divisível por 3: ${numeroInteiro = true}`
    } else {
        return `O númro ${numeroInteiro} não é divisível por 3: ${numeroInteiro = false}`
    }
}

console.log(verificarNumero(20));
