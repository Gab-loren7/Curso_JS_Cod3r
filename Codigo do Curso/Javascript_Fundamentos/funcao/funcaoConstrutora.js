// Função Construtora
function Carro(velocidadeMaxima = 200, delta = 5) {
    // Atributo privado
    let velocidadeAtual = 0

    // metodo publico devido o "this."
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro // mesmos parâmetros
uno.acelerar()
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350,20) // Novos parâmetros
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual());

const bugatti = new Carro(200, 50) // Novos parâmetros
bugatti.acelerar() //50
bugatti.acelerar() //100
bugatti.acelerar() //150
bugatti.acelerar() //200
bugatti.acelerar() //200 velocidade máxima
console.log(bugatti.getVelocidadeAtual()); // Verifica a velocidade Atual