
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey"
            }
        ]
    }
]

// Número de categorias
const numberOfCategories = booksByCategory.length;
console.log(`Número de categorias: ${numberOfCategories}`);

// Número de livros por categoria
for (const category of booksByCategory) {
    console.log(`Número de livros em: ${category.category}`)
    console.log(category.books.length)
}

// Número de autores
let authors = [];
for (const category of booksByCategory) {
    category.books.map(book => {
        if (!authors.includes(book.author)) {
            authors.push(book.author)
        }
    });
}

// Função que retorna os livros a partir do nome do autor
function findBookByAuthor(author) {
    let booksByAuthor = []
    for (const category of booksByCategory) {
        category.books.map(book => {
            if (book.author == author) {
                booksByAuthor.push(book)
            }
        });
    }

    if (booksByAuthor.length >= 1) {
        booksByAuthor.forEach(book => {
            console.log(book)
        });
    } else {
        console.log("Não foi possível encontrar livros deste autor")
    }
}

console.log(`Número de autores: ${authors.length}`);
findBookByAuthor("Augusto Cury")