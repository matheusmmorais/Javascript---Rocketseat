// manipulando Strings e Arrays

// separe um texto que contem espaços, em um novo array onde cada texto é uma posicao do array, depois disso transforme o array em um texto e onde eram espacos coloque _

let phrase = "eu quero viver o amor!";
let myArray = phrase.split(" ");
let phraseWithUnderscore = myArray.join("_");
console.log(phraseWithUnderscore.toLowerCase);
