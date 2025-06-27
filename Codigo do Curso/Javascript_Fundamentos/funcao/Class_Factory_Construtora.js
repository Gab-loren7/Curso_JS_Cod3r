// Função Class
class Pessoa_Class {
    constructor(nome) {
        this.nome = nome
    };

    falar_Class() {
        console.log(`Meu nome é ${this.nome}`);
    };
};

const p1 = new Pessoa_Class('João')
p1.falar_Class()

/////////////////////////////////////////////////////////////////////////////////////////////

// Função Factory
const criarPessoa_Factory = nome => {
    return{
        falar_Factory: () => console.log(`Meu nome é ${nome}`)
    };
};

const p2 = criarPessoa_Factory('Felipe')
p2.falar_Factory()

/////////////////////////////////////////////////////////////////////////////////////////////

// Função Construtora
function Pessoa_Construtora(nome){
    this.nome = nome

    this.falar_Construtora = function(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p3 = new Pessoa_Construtora('Gabriel')
p3.falar_Construtora()