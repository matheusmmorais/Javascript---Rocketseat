/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const numberCategories = booksByCategory.length;
console.log(numberCategories);

for (let categories of booksByCategory){
    console.log(("total de livros de categoria: ") + categories.category)
    console.log(categories.books.length);
}

function count(){
    let autores = [];

    for (let categories of booksByCategory){
        for (book of categories.books){
            if (autores.indexOf(book.author) == -1) {
                autores.push(book.author);
            }
        }
    }
    console.log("Total de autores", autores.length )
}

function showAuthor(){
    let arrayFinal = [];

    for (let categories of booksByCategory){
        for(let autores of categories.books){
            if (autores.author.includes("Augusto Cury")){
                arrayFinal.push(autores.title);
            }
        }
    }

    console.log("Os livros de Augusto são:", arrayFinal);
}

function showAuthor(nomeAutor){
    let arrayFinal = [];
    
    for (let categories of booksByCategory){
        for(let autores of categories.books){
            if (autores.author.includes(nomeAutor)){
                arrayFinal.push(autores.title);
            }
        }
    }

    console.log("Os livros devolvidos são", arrayFinal);
}

