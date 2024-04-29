// sukurti knygu kataloga kuriame butu 12 knygu ir 3 kategorijos
let catalog = [
    {
        category: "Fantastika",
        books: [
            { 
              ISBN: "FA1234A", 
              years: 1894,
              name:'Džiunglių knyga' , 
              pages: 386 
            },
            { 
              ISBN: "FA1234B", 
              years: 1953,
              name:'451 laipsnių pagal Farenheitą' , 
              pages: 534 
            },
            { 
              ISBN: "FA1234C", 
              years: 1965,
              name:'Dune' ,
              pages: 630 
            },
            { 
              ISBN: 'FA1234D', 
              years: 2024, 
              name:'Aukso draugas', 
              pages: 453
            }
        ]
    },
    {
        category: "Romanai",
        books: [
            { 
                ISBN: "RO1234E", 
                years: 1813, 
                name:'Ponios Priešininkė' , 
                pages: 250 
            },
            { 
                ISBN: "RO1234F", 
                years: 1967, 
                name:'Stebuklas' , 
                pages: 723 
            },
            { 
                ISBN: "RO1234G", 
                years: 1925, 
                name:'Didysis Gatsby' , 
                pages: 538 
            },
            { 
                ISBN: 'RO1234H', 
                years: 2024, 
                name: 'Nemirtingas debesis', 
                pages: 452
            }
        ]
    },
    {
        category: 'Klasika',
        books: [
            {
                ISBN: 'KL1234J', 
                years: 1880, 
                name: 'Broliai Karamazovai', 
                pages: 350
            },
            {
                ISBN: 'KL1234K', 
                years: 1851, 
                name: 'Moby Dick', 
                pages: 502
            },
            {
                ISBN: 'KL1234L', 
                years: 1856, 
                name: 'Ponios Bovary', 
                pages: 472
            },
            {
                ISBN: 'KL1234M', 
                years: 2024, 
                name: 'Karalaitės slėptuvė', 
                pages: 423
            },
        ]
    }
];


for(let category of catalog){
    console.log(`--------------------------`)
    console.log(`${category.category}(${category.books.length} knygos):`)

    for(let book of category.books){
        let releaseYear = "";
        if(book.years === 2024) {
            releaseYear = "(nauja knyga)";
        }
        console.log(`ISBN: ${book.ISBN}`);
        console.log(`Isleidimo metai: ${book.years} ${releaseYear}`);
        console.log(`Pavadinimas: ${book.name}`);
        console.log(`Puslapiai: ${book.pages}`);
        console.log(`--------------------------`)
    }
}