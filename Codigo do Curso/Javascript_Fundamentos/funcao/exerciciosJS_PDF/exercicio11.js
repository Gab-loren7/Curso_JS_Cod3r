/* As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false.  */

let calcularAno = (ano) => {
    if (ano <= 0) {
        return `O ano ${ano} não é um ano Bissexto: ${ano = false}`
    } else if (ano % 400 == 0) {
        return `O ano ${ano} é um ano Bissexto: ${ano = true}`
    } else if (ano % 100 == 0) {
        return `O ano ${ano} não é um ano Bissexto: ${ano = false}`
    } else if (ano % 4 == 0) {
        return `O ano ${ano} é um ano Bissexto: ${ano = true}`
    } else {
        return `O ano ${ano} não é um ano Bissexto: ${ano = false}`
    };
};

console.log(calcularAno(40));
