/* Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como 
parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro...) que foi paga e o valor da anuidade. A 
anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros 
compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido. */

const pagarAnuidade = (mesInteiro, valor) => {
    switch (mesInteiro) {
        case 1: 
            return `A anuidade foi paga em 1 - Janeiro por: R$`
        case 2:
            return `A anuidade foi paga em 2 - Fevereiro por: R$`
        case 3:
            return `A anuidade foi paga em 3 - Março por: R$`
        case 4:
            return `A anuidade foi paga em 4 - Abril por: R$`
        case 5:
            return `A anuidade foi paga em 5 - Maio por: R$`
        case 6:
            return `A anuidade foi paga em 6 - Junho por: R$`
        case 7:
            return `A anuidade foi paga em 7 - Julho por: R$`
        case 8:
            return `A anuidade foi paga em 8 - Agosto por: R$`
        case 9:
            return `A anuidade foi paga em 9 - Setembro por: R$`
        case 10:
            return `A anuidade foi paga em 10 - Outubro por: R$`
        case 11:
            return `A anuidade foi paga em 11 - Novembro  por: R$`
        case 12:
            return `A anuidade foi paga em 12 - Dezembro por: R$`
        default: return `Mês invalido para pagamento. Digite um número de 1 a 12`
    }
}