
import bookCtrl from './book';
import { UISelectors } from './ui';
import uictrl from './ui';


document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAll);
document.querySelector(UISelectors.addBtn).addEventListener('click', addBook);
document.querySelector(UISelectors.updateBtn).addEventListener('click', updateBook);
document.querySelector(UISelectors.deleteBtn).addEventListener('click', deleteBook);
document.querySelector(UISelectors.backBtn).addEventListener('click', back);
document.querySelector(UISelectors.itemListUl).addEventListener('click', edit);


function addBook(e) {
  console.log("Clicking Add Button");
  const [bookName, bookAuthor, bookPages, bookStatus] = uictrl.getInput();
  if (!(bookName === "" || bookAuthor === "" || bookPages === "")) {
    bookCtrl.addBook(bookName, bookAuthor, bookPages, bookStatus);
    uictrl.renderItemList(bookCtrl.books);
    uictrl.clearInput();
  }
  e.preventDefault();
}

function back(e) {
  console.log("Clicking back button");
  uictrl.clearInput();
  e.preventDefault();
}

function edit(e){
  console.log(e);
  if (e.target.classList.contains("edit-item")) {
    const cListId = e.target.parentNode.parentNode.id
    const cListIdIndex = cListId.split('-')[1];
    bookCtrl.setCurrentBookbyIndex(cListIdIndex);
    uictrl.renderEditItemToForm(bookCtrl.books[cListIdIndex]);
    uictrl.enableUpdateAndDeleteButton();
  }
}


function updateBook(e) {
  console.log("Clicking update button");
  const [bookName, bookAuthor, bookPages, bookStatus] = uictrl.getInput();
  if (!(bookName === "" || bookAuthor === "" || bookPages === "")) {
    bookCtrl.updateCurrentBook(bookName, bookAuthor, bookPages, bookStatus);
    console.log(bookCtrl.books);
    uictrl.renderItemList(bookCtrl.books);
    uictrl.clearInput();
    uictrl.disableUpdateAndDeleteButton();
  }
  e.preventDefault();
}

function deleteBook() {
  console.log("Clicking delete button");

  if (JSON.stringify(uictrl.getInput() === JSON.stringify(bookCtrl.getCurrentBook()))) {
    bookCtrl.deleteCurrentBook();
    uictrl.disableUpdateAndDeleteButton();
  }
  console.log(bookCtrl.books);
  uictrl.renderItemList(bookCtrl.books);
  uictrl.clearInput();
}


function clearAll() {
  console.log("Clicking Clearing All Button");
  bookCtrl.deleteAllBook();
  uictrl.renderItemList(bookCtrl.books);
}

