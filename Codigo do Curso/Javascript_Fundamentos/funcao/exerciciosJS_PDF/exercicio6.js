/*  Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação.

A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda 
retornará o valor da aplicação sob o regime de juros compostos. */

let jurosSimples = (capitalInicial, taxaJuros, tempo) => {
    let montante = capitalInicial + (capitalInicial * taxaJuros * tempo)

    return `A aplicação sob juros Simples é de R$${montante.toFixed(2)} \n`
}

let jurosCompostos = (capitalInicial, taxaJuros, tempo) => {
    let montante = capitalInicial * (1 + taxaJuros) ** tempo

    return `A aplicação sob juros Compostos é de R$${montante.toFixed(2)} `
}

console.log(jurosSimples(200, 0.5, 3));
console.log(jurosCompostos(200, 0.5, 3));
