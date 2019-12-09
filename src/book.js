
class BookCtrl {
    constructor() {
        this.books = [];
        this.currentBook = null;
    }

    addBook(name, author, pages, status) {
        const book = {
            "id": this.books.length,
            "name": name,
            "author": author,
            "pages": pages,
            "status": status
        };
        this.currentBook = book;
        this.books.push(book);
    }

    updateCurrentBook(name, author, pages, status){
        const book = {
            "id": this.currentBook.id,
            "name": name,
            "author": author,
            "pages": pages,
            "status": status
        };
        this.books[this.currentBook.id] = book;
    }

    setCurrentBookbyIndex(index) {
        this.currentBook = this.books[index];
    }

}

const bookCtrl = new BookCtrl();

export default bookCtrl;
