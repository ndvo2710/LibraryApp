
export class UISelectors {
    static clearBtn = ".clear-btn";
    static addBtn = ".add-btn"
    static updateBtn = ".update-btn";
    static deleteBtn = ".delete-btn";
    static backBtn = ".back-btn";
    static updateBtn = ".update-btn";
    static editBtn = ".edit-item";
    static nameInput = "#book-name";
    static authorInput = "#book-author";
    static pageInput = "#book-page";
    static statusCheckbox = "#book-status";
    static itemListUl = "#item-list";
}


class UICtrl {

    getInput() {
        const InputSelectorsList = [
            UISelectors.nameInput,
            UISelectors.authorInput,
            UISelectors.pageInput,
            UISelectors.statusCheckbox
        ];
        const bookInput = [];
        InputSelectorsList.forEach(inputSelector => {
            const inputElement = document.querySelector(inputSelector);
            if (inputElement.type === "checkbox") {
                if (inputElement.checked) {
                    bookInput.push("Done")
                } else {
                    bookInput.push("Not Yet");
                }
            } else {
                bookInput.push(inputElement.value);
            }
        });
        console.log(`Book Input : ${bookInput}`);
        return bookInput;
    }

    renderItemList(books) {
        const itemListElement = document.querySelector(UISelectors.itemListUl);
        itemListElement.innerHTML = "";
        books.forEach((book, id) => {
            itemListElement.innerHTML += `
                <li class="collection-item" id="book-${id}">
                    <strong>Book: </strong> <em>${book.name}</em>
                    &emsp;
                    <strong>Author: </strong> <em>${book.author}</em>
                    &emsp;
                    <strong>Pages: </strong> <em>${book.pages}</em>
                    &emsp;
                    <strong>Status: </strong> <em>${book.status}</em>
                    <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>
                </li>
                `
                }
        );
    }
}

const uictrl = new UICtrl();
export default uictrl;

