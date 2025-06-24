console.log(soma(3,4));

// as function declaration sempre carregam primeiro no arquivo. Os outros estilos não.

// console.log(sub(3,4));

// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}

// named function expression (Menos usado)
const mult = function mult(x,y){
    return x * y
}
