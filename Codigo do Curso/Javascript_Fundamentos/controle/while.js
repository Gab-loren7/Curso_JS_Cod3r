function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min// Math.random() gera numeros aleatorios
    return Math.floor(valor)// Math.floor aredonda para menor
}

let opcao = 0

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`) // ${} concatena com a string
}

console.log("Até a próxima!")