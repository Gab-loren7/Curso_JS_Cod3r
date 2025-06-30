/* Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado 
e o resto da divisão destes dois valores. */

let dividir = (dividendo, divisor) => {
    let resultado = dividendo / divisor
    let resto = dividendo - (divisor * resultado.toFixed(0))
    return `O resultado é ${resultado.toFixed(0)} e o resto da divisão é ${resto}`
}

console.log(dividir(10, 3));