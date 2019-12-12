
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

    updateCurrentBook(name, author, pages, status) {
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

    getCurrentBook() {
        return [this.currentBook.name, this.currentBook.author, this.currentBook.pages, this.currentBook.status]
    }

    deleteCurrentBook(){
        this.books.splice(this.currentBook.id, 1);
    }

    deleteAllBook(){
        this.books = [];
    }

}

const bookCtrl = new BookCtrl();

export default bookCtrl;
