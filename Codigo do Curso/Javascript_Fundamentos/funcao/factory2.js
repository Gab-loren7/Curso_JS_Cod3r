// Função Factory em práica!

function criarProduto(nome,preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

let notebook = criarProduto('Notebook',2199.49)
console.log(notebook);

console.log(criarProduto('iPad',1199.49));
console.log(criarProduto('Headset', 199.49));

