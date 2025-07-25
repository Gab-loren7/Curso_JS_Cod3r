/* Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do 
aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do 
aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e 
"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo. */

let notaAluno = (codAluno, nota1, nota2, nota3) => {
    let mediaPonderada = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3)) / (4 + 3 + 3)
    if (mediaPonderada >= 5) {
        console.log(`A nota do aluno: ${codAluno}# foi ${nota1}, ${nota2}, ${nota3}. E a média foi ${mediaPonderada}: Aprovado!`);
    } else if (mediaPonderada < 5) {
        console.log(`A nota do aluno: ${codAluno}# foi ${nota1}, ${nota2}, ${nota3}. E a média foi ${mediaPonderada}: Reprovado!`);
    }
}

notaAluno(123, 7, 8, 9)