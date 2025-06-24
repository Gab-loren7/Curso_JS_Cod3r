const escola = "Cod3r"

console.log(escola.charAt(4))//A função "charAt()" diz a letra de uma string
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))//mostra codigo da tabela unicode relacionado ao indice "3"
console.log(escola.indexOf('3'))

console.log(escola.substring(1))// Ele mostra todas as letras menos a do indice "1"
console.log(escola.substring(0, 3))//Ele começa do indice "0" e vai até o "3"

console.log('Escola '.concat(escola).concat("!"))//Para concatenar
console.log(escola.replace(3, 'e'))//Para substituir o "3" pelo "e"

console.log('Ana, Maria, Pedro'.split(','))//Criou uma array chamando a função split