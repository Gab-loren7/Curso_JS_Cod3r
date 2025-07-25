/* Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, 
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três 
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, 
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo 
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: 
“Delta é negativo”. */

let Bhaskara = (ax2, bx, c) => {
    let delta = (bx ** 2) - 4 * ax2 * c;
    let raizDelta = Math.sqrt(delta);

    if(delta >= 0){
        let x1 = (- bx + raizDelta) / 2 * ax2
        let x2 = (- bx - raizDelta) / 2 * ax2
        return [x1,x2]
    }else{
        return "Delta é negativo"
    };
};

console.log(Bhaskara(1, 12, -13)); // Output: [ 1, -13 ]
console.log(Bhaskara(7, 3, 4)); // Output: Delta é negativo
