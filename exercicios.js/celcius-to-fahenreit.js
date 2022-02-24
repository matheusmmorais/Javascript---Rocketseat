/*  Celsius to  fahrenteit

    Crie uma funcao que receba uma String em celsius ou fahrenheit e faca a transformacao de uma unidade
    para outra.

    C = (F - 32) * 5/9
    F = C * 9/5 + 32
*/

function converter(degree){
    let value;
    if (degree.includes("C")){
        value = degree.slice(0,-1);
        value = ((value * 9/5) + 32);
        console.log(`a conversão de Farenheit para Celsius é ${value}`);
    } else if (degree.includes("F")){
        value = degree.slice(0,-1);
        value = ((value -32) * 5/9);
        console.log(`a conversão de Celsius para Farenheit é ${value.toFixed(2)}`);
    }

    return console.log("calculo efetuado com sucesso.");
}
