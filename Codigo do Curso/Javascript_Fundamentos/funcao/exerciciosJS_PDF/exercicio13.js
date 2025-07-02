/* Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch. */

const diaUtil = (dia) => {
    switch (dia) {
        case 7:
            console.log("Sábado não é dia útil.");
            break;
        case 6:
        case 5:
        case 4:
        case 3:
        case 2:
            console.log("Dia útil!");
            break;
        case 1:
            console.log("Domingo não é dia útil.");
            break;

        default:console.log("Apenas números de 1 a 7");
    };
};

diaUtil(7);
diaUtil(6);
diaUtil(5);
diaUtil(5);
diaUtil(3);
diaUtil(2);
diaUtil(1);
diaUtil();