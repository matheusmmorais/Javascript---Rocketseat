// switch

let expression = 'a';

switch (expression){
    case 'a':
        console.log("a");
        break;
    case 'b':
        console.log("b");
    default:
        break;
}

function calculate(number1, number2, operator){
    let total;
    switch (operator){
        case '+':
        total = number1 + number2;
        break;
        case '-':
        total = number1 - number2;
        break;
        case '*':
        total = number1 * number2;
        break;
        case '/':
        total = number1 / number2;
        break;
        default:
            console.log("nao foi possivel encontrar o operador.")
        break;   
    }
    return total;
}

console.log(calculate(4,2,'+'));