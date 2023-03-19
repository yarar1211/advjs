const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];

const booksArr = document.getElementById('root');

books.forEach((el) => {const {author, name, price} = el;
    if (author && name && price){
        booksArr.insertAdjacentHTML('afterbegin',`<ul><li>${author}</li><li>${name}</li><li>${price}</li></ul>`);
    }
})
function checkEl(el) {
    const {author, name, price} = el
    if (!author){
        throw new Error("author not entered")
    }
    if (!name){
        throw new Error("name not entered")
    }
    if (!price){
        throw new Error("price not entered")
    }
    return el
}
function checkBooks(arr){
    for (let i = 0; i < arr.length; i++)
        try {
            checkEl(arr[i])
        }
        catch(e){
            console.error(e)
        }
}
checkBooks(books);
