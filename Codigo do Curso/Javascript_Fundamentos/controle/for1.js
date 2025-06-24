let contador = 1 // controla o laço
while (contador <= 10) {
    console.log(`contador = ${contador}`) // ${} concatena com a string
    contador++ // add valor até 10
}

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`) // ${} concatena com a string
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++)// length = tamanho arrey
{
    console.log(`notas = ${notas[i]}`)

}