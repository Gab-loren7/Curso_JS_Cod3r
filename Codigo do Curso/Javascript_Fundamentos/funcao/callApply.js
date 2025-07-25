// Função Factory
function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()); // Não funciona ateé a variavel preco e desc estar em escopo global

console.log(produto.getPreco()); // Esse log imprime apartir do Objeto 'produto'

//////////////////////////////////////////////////////////////////////////////////////////////////////

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$')); // Com o call vc pode passar os Parametros após a ','
console.log(getPreco.apply(carro, [0.17, '$'])) // Com apply necessita do Array