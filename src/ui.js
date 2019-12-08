import { UI } from "winjs";


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
    static inputContainer = ".input-container";
    static alert = ".alert"
    static errorMessage = ".error-message";
}

async function delay(ms) {
    // return await for better async stack trace support in case of errors.
    return await new Promise(resolve => setTimeout(resolve, ms));
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
                console.log(inputElement.name);
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
            alerts.forEach(alert => {
                alert.style.opacity = 1;
              
            });// set opacity for the element to 1


            (function () {
                let alerts = document.querySelectorAll(UISelectors.alert);
                let i = 0;
                let timerId = setInterval(function () { // start interval loop
                    alerts.forEach((alert, index, alertsArray) => {
                        alertsArray[index].style.opacity = 1 - 0.03 * i
                    });
                    if (++i === 100) clearInterval(timerId);
                }, 100); // run every 0.1 second
            })();// fadeout

            alerts.forEach(alert => {
                setTimeout(() => {
                    alert.parentNode.removeChild(alert);
                }, 5000)
            }); // remove alert
        }
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

