/*  Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado 
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos 
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com 
idade acima de  30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

let valorDoPlano = 100

const calcularPreco = (idade) => {
    if (idade < 10) {
        return `Valor do Plano de Saúde: ${valorDoPlano + 80}`
    } else if (idade >= 10 && idade <= 30) {
        return `Valor do Plano de Saúde: ${valorDoPlano + 50}`
    } else if (idade > 30 && idade <= 60) {
        return `Valor do Plano de Saúde: ${valorDoPlano + 95}`
    } else if (idade > 60) {
        return `Valor do Plano de Saúde: ${valorDoPlano + 130}`
    } else if (idade = String) {
        return `Idade só pode ser um Número`
    }
}

console.log(calcularPreco(8));
console.log(calcularPreco(15));
console.log(calcularPreco(35));
console.log(calcularPreco(52));
console.log(calcularPreco(80));
console.log(calcularPreco("Olá mundo!"));
