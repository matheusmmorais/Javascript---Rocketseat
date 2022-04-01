/* ### Sistema de gastos familiar

crie um objetvo que possuirá 2 propriedades, ambas do tipo array:
* receitas: []
* despesas: []

Agora, crie uma funcao que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a familia esta
com saldo positivo ou negativo, seguido do valor do saldo.

*/

const systemReceit = {
    receitas: [200,300,400,500,100,200],
    gastos: [500,100,400,900,200,300]
};


function somaValores(array) {
    let total = 0;
    for(let values of array){
        total += values;    
    }
    return total;
}


function calcReceit (){
    let calculoReceitas = somaValores(systemReceit.receitas);
    let calculoGastos = somaValores(systemReceit.gastos);
    let calculoTotal = (calculoReceitas - calculoGastos);
    if (calculoTotal > 0){
        console.log(`você está positivo com ${calculoTotal}`);
    } else if (calculoTotal < 0 ){
        console.log(`você está negativo com ${calculoTotal}`);
    } else if (calculoTotal = 0) {
        console.log(`você está com saldo zerado`);
    } else {
        console.log("calculo nao efetuado.");
    }
    return console.log("calculo finalizado");
};
