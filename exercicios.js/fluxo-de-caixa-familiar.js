/* ### transformar notas escolares

crie um algoritmo que transforme as notas do sistema numérico para sistema
de notas em caracteres tipo A B C;

*de 90 para cima - A
*entre 80 - 89   - B
*entre 70 - 79   - C
*entre 60 - 69   - D
*menor que 60    - F

*/

let nota = 0;

function getScore(nota){
    let notaFinal;
    
    if (nota >= 90){
       notaFinal = console.log("nota A");
    } else if (nota >= 80 && nota <= 89){
        notaFinal = console.log("nota B");
    } else if (nota >= 70 && nota <=79){
        notaFinal = console.log("nota C");    
    } else if (nota >= 60 && nota <=69){
        notaFinal = console.log("nota D");
    } else if (nota < 60){
        notaFinal = console.log("nota F");
    };

    return notaFinal;
};