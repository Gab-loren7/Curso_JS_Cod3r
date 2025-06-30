/* Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente. */

let elevar = (base, expoente) => {
    let resultado = 1; //Começamos com resultado = 1.

    // A cada volta do for, multiplicamos o resultado pela base.
    for(let i = 0; i < expoente; i++){
        resultado *= base;
    } 
    // Repetimos isso expoente vezes.

    return resultado;
}

console.log(elevar(3,2)); // output: 3² = 9
