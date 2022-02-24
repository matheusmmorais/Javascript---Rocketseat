function sayMyName (name){
    if (name == ''){
        throw new Error("nome é necessário")
    }
}

try {
    sayMyName('');
} catch(e){
    console.log(e);
}