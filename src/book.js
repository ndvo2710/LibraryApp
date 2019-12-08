
class BookCtrl {
    constructor() {
        this.books = [];
    }

    addBook(name, author, pages, status) {
        const book = {
            "name": name,
            "author": author,
            "pages": pages,
            "status": status
        };
        this.books.push(book);
    }
}

const bookCtrl = new BookCtrl();

export default bookCtrl;
