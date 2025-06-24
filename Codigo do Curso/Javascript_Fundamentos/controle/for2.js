const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas){
    console.log(i, notas[i])
    
}

//Objeto pessoa
const pessoa ={
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 64
}

// Igual o primeiro exemplo, só que na prática
for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

// Atributo = i