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

class NotKeepPropError extends Error {
    constructor(prop, name) {
        super();
        this.name = "NotKeepPropError";
        this.message = `Property not found: ${prop} in ${name}`;
    }
}

class DescribeBooks {
    constructor(author, name, price) {
        if (author === undefined){
            throw new NotKeepPropError("author", name);
        } else if (name === undefined){
            throw new NotKeepPropError("name", author);
            } if (price === undefined){
                throw new NotKeepPropError("price", name);
                }

        this.author = author;
        this.name = name;
        this.price = price;
        this.li = document.createElement('li');

    }
    createElements() {
        this.li.className = "list__item";
        this.li.insertAdjacentHTML('beforeend',
            `Автор:<b> ${this.author}</b>, Назва:<b> ${this.name}</b>, Ціна:<b> ${this.price}</b>`)
    }

    render(container) {
        this.createElements();
        container.append(this.li);
    }
}

const ul = document.createElement('ul');


books.forEach((el) => {
    try {
    new DescribeBooks(el.author, el.name, el.price).render(ul);
    } catch (err) {
        if (err.name === "NotKeepPropError") {
            console.warn(err);
        } else {
            throw err;
        }
    }

})

const container = document.querySelector("#root");
container.append(ul);
