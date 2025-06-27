// Crie uma função construtora a partir da Classe criada em 'classeVsFactory.js'

function Pessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa('Gabriel')
p1.falar()