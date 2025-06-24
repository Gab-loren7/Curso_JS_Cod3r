let num1 = 1
let num2 = 2

num1++
console.log(num1);

--num1
console.log(num1);

console.log(++num1 === num2--);
// Somente dps da comparação que o valor é retirado
console.log(num1 === num2);
// Vai dar falso devido o valor retirado na linha 10