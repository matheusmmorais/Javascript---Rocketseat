

// declaration 
// function statement
function createPhrases(){
    console.log('estudar é muito bom');
    console.log('paciencia é resilicencia');
    console.log('revisão é mae do aprendizado');
};

// executar a funcao
// execute, run, call, invoke

createPhrases();

// parameters
const sum = function(number1, number2){
      console.log(number1 + number2);
};

sum(1,2); //arguments

// funcao liquidificador

const FazerSuco = function(fruta1, fruta2){
    return `soma é: ${fruta1 + fruta2}`
};

let copo = FazerSuco('banana','maça');
console.log(copo);

let Subject = "teste";

function CreateThink(Subject){
    Subject = 'study'
    return Subject;
};

console.log(CreateThink(Subject));
console.log(Subject);


