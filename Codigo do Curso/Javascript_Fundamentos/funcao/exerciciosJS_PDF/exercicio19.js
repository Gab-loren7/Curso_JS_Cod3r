/* O cardápio de uma lanchonete é o seguinte:

    +--------+------------------------+--------+
    | Código | Descrição do Produto  | Preço  |
    +--------+------------------------+--------+
    |  100   | Cachorro Quente        | R$3,00 |
    |  200   | Hambúrguer Simples     | R$4,00 |
    |  300   | Cheeseburguer          | R$5,50 |
    |  400   | Bauru                  | R$7,50 |
    |  500   | Refrigerante           | R$3,50 |
    |  600   | Suco                   | R$2,80 |
    +--------+------------------------+--------+

Implemente uma  função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor 
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o 
comando switch. Crie um caso default para produto não existente. */

const cardapioRestaurante = (codigo, quantidade) => {
    switch (codigo) {
        case 100:
            return `${quantidade}. Cachorro Quente = R$${(quantidade * 3).toFixed(2).replace('.',',')}`;
        case 200:
            return `${quantidade}. Hambúrguer Simples = R$${(quantidade * 4).toFixed(2).replace('.',',')}`;
        case 300:
            return `${quantidade}. Cheeseburguer = R$${(quantidade * 5.50).toFixed(2).replace('.',',')}`;
        case 400:
            return `${quantidade}. Bauru = R$${(quantidade * 7.50).toFixed(2).replace('.',',')}`;
        case 500:
            return `${quantidade}. Refrigerante = R$${(quantidade * 3.50).toFixed(2).replace('.',',')}`;
        case 600:
            return `${quantidade}. Suco = R$${(quantidade * 2.80).toFixed(2).replace('.',',')}`;
        default: return 'Produto não Existente!';
    }
}

console.log(cardapioRestaurante(100, 6));
console.log(cardapioRestaurante(200, 5));
console.log(cardapioRestaurante(300, 4));
console.log(cardapioRestaurante(400, 3));
console.log(cardapioRestaurante(500, 2));
console.log(cardapioRestaurante(600, 1));
console.log(cardapioRestaurante(700, 0));
