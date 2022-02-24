// condicao entao valor 1 se nao valor 2 
// condition ? value1 : value2

// exemplos
// cafe da manha top

let pao = true;
let queijo = true;

const breakfast = pao && queijo ? 'top' : 'ruim';
console.log(breakfast);

// maior de 18

let idade = 16;
const canDrive = idade >= 18 ? 'can drive' : 'cannot drive';