/* Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:  
Equilátero: Os três lados são iguais. Isósceles:  Dois lados iguais. Escaleno: Todos os lados são diferentes.  
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto 
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um 
triângulo). */

const receberValores = (lado1, lado2, lado3) => {
    if (lado1 === lado2 && lado2 === lado3) {
        return "O triângulo é Equilátero: Os três lados são iguais.";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "O triângulo é Isósceles: Dois lados são iguais.";
    } else {
        return "O triângulo é Escaleno: Todos os lados são diferentes.";
    }
};

// Exemplo de uso
console.log(receberValores(1, 1, 1));  // Equilátero
console.log(receberValores(2, 2, 3));  // Isósceles
console.log(receberValores(1, 2, 3));  // Escaleno