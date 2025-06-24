// Minha forma:
 /*
    let a = 7;
    let b = 94;

    a = 94;
    b = 7;

    console.log(a);
    console.log(b);
*/
// Forma do Professor:
/*
    let a = 7;
    let b = 97;

    let temp = a;
    a = b;
    b = temp;

    console.log(a);
    console.log(b);
*/
// Forma avançada

    let a = 7;
    let b = 97;

    [a, b] = [b, a]

    console.log(a);
    console.log(b);
