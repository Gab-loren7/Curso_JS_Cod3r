/* Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

let expoente = (base, expoente) => {
    let resultado = 1; //Começamos com resultado = 1.

    // A cada volta do for, multiplicamos o resultado pela base.
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
        // *= é uma forma abreviada de variavel = variavel * outroValor. 
    }
    // Repetimos isso expoente vezes.

    return resultado;
}

console.log(expoente(3, 2)); // output: 3² = 9

/////////////////////////////////////////////////////////////////////////////////////

function expoenteResposta(base, expoente) {
    //Podemos fazer de 2 modos
    //Método antigo:
    let resultado = Math.pow(base, expoente)
    //Método novo:
    resultado = base ** expoente

    return resultado
}

console.log(expoenteResposta(3, 2))