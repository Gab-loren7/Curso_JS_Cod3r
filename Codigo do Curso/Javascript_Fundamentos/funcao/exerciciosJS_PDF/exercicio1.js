/* Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, 
multiplicação e divisão desses valores.  */

let resultado = (valor1, valor2) => {
    let soma = valor1 + valor2
    let sub = valor1 - valor2
    let multi = valor1 * valor2
    let divi = valor1 / valor2

    return {
        soma,
        sub,
        multi,
        divi
    }
}

console.log(resultado(10, 2)); // output: { soma: 12, sub: 8, multi: 20, divi: 5 }
