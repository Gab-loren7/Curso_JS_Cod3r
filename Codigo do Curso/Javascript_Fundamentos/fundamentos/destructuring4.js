function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //inverte os valores
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]));//Entre 50 e 40
console.log(rand([992]));//entre 992 e 1000
console.log(rand([, 10]));// entre 0 e 10
console.log(rand([])) // vazio é igual a nada. 0 e 1000
// console.log(rand()); Não é possivel ler propriedades de indefinido


