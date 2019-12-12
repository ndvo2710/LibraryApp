import { UI } from "winjs";



export const UISelectors = {
    clearBtn : ".clear-btn",
    addBtn : ".add-btn",
    updateBtn : ".update-btn",
    deleteBtn : ".delete-btn",
    backBtn : ".back-btn",
    editBtn : ".edit-item",
    nameInput : "#book-name",
    authorInput : "#book-author",
    pageInput : "#book-page",
    statusCheckbox : "#book-status",
    itemListUl : "#item-list",
    inputContainer : ".input-container",
    alert : ".alert",
    errorMessage : ".error-message"
}


class UICtrl {

    constructor() {
        this.clearBtnElem = document.querySelector(UISelectors.clearBtn);
        this.addBtnElem = document.querySelector(UISelectors.addBtn);
        this.updateBtnElem = document.querySelector(UISelectors.updateBtn);
        this.deleteBtnElem = document.querySelector(UISelectors.deleteBtn);
        this.backBtnElem = document.querySelector(UISelectors.backBtn);
        // this.editBtnElem = document.querySelector(UISelectors.editBtn);
        this.nameInputElem = document.querySelector(UISelectors.nameInput);
        this.authorInputElem = document.querySelector(UISelectors.authorInput);
        this.pageInputElem = document.querySelector(UISelectors.pageInput);
        this.statusCheckboxElem = document.querySelector(UISelectors.statusCheckbox);
        this.itemListUlElem = document.querySelector(UISelectors.itemListUl);
        this.inputContainerElem = document.querySelector(UISelectors.inputContainer);
        this.InputElementsList = [
            this.nameInputElem,
            this.authorInputElem,
            this.pageInputElem,
            this.statusCheckboxElem
        ]
    }

    clearInput() {
        this.InputElementsList.forEach(inputElement => {
            if (inputElement.type === "checkbox") {
                if (inputElement.checked) {
                    inputElement.checked = false;
                } 
            } else {
                inputElement.value = "";
            }
        });
    }

    getInput() {
        const bookInput = [];
        this.InputElementsList.forEach(inputElement => {
            if (inputElement.type === "checkbox") {
                if (inputElement.checked) {
                    bookInput.push("Done")
                } else {
                    bookInput.push("Not Yet");
                }
            } else {
                this.validateInput(inputElement);
                bookInput.push(inputElement.value);
            }
        });
        this.fadeOutAndRemoveAlert();
        console.log(`Book Input : ${bookInput}`);
        return bookInput;
    }

    validateInput(inputElement) {
        if (inputElement.value === "") {
            const div = document.createElement('div');
            div.className = "alert";
            div.style = "color:red"
            div.appendChild(document.createTextNode(`${inputElement.placeholder} should not be empty. Please fill in the blank`));
            const container = inputElement.parentElement;
            container.insertBefore(div, inputElement.nextSibling);
        }
    }


    fadeOutAndRemoveAlert() {
        let alerts = document.querySelectorAll(UISelectors.alert); // get required element
        if (alerts) {

            // disable fadeout. Does not work on some browser
                // alerts.forEach(alert => {
                //     alert.style.opacity = 1;

                // });// set opacity for the element to 1
                // (function () {
                //     let alerts = document.querySelectorAll(UISelectors.alert);
                //     let i = 0;
                //     let timerId = setInterval(function () { // start interval loop
                //         alerts.forEach((alert, index, alertsArray) => {
                //             alertsArray[index].style.opacity = 1 - 0.03 * i
                //         });
                //         if (++i === 100) clearInterval(timerId);
                //     }, 100); // run every 0.1 second
                // })();// fadeout

            alerts.forEach(alert => {
                setTimeout(() => {
                    alert.parentNode.removeChild(alert);
                }, 3000)
            }); // remove alert
        }
    }

    renderItemList(books) {
        this.itemListUlElem.innerHTML = "";
        books.forEach((book, id) => {
            this.itemListUlElem.innerHTML += `
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

    renderEditItemToForm(book) {
        this.nameInputElem.value = book.name;
        this.authorInputElem.value = book.author;
        this.pageInputElem.value = book.pages;
        this.statusCheckboxElem.checked = (book.status === "Done");
    }

    enableUpdateAndDeleteButton() {
        const buttons = [
            this.updateBtnElem,
            this.deleteBtnElem
        ];
        buttons.forEach(buttonElem => {
            if (buttonElem.classList.contains("disabled")) {
                buttonElem.classList.remove("disabled");
            }
        });
    }

    disableUpdateAndDeleteButton() {
        const buttons = [
            this.updateBtnElem,
            this.deleteBtnElem
        ];
        buttons.forEach(buttonElem => {
            buttonElem.classList.add("disabled");
        });
    }


}

const uictrl = new UICtrl();
export default uictrl;

