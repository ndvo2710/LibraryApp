
import bookCtrl from './book';
import { UISelectors } from './ui';
import uictrl from './ui';


document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAll);
document.querySelector(UISelectors.addBtn).addEventListener('click', addBook);
document.querySelector(UISelectors.updateBtn).addEventListener('click', updateBook);
document.querySelector(UISelectors.deleteBtn).addEventListener('click', deleteBook);
document.querySelector(UISelectors.backBtn).addEventListener('click', back);


function addBook(e) {
  console.log("Clicking Add Button");
  const [bookName, bookAuthor, bookPages, bookStatus] = uictrl.getInput();
  if (!(bookName === "" || bookAuthor === "" || bookPages === "")) {
    bookCtrl.addBook(bookName, bookAuthor, bookPages, bookStatus);
    console.log("Redering Books:");
    console.log(bookCtrl.books);
    uictrl.renderItemList(bookCtrl.books);
  }
  e.preventDefault();
}

function updateBook() {
  // console.log("Clicking update button");
}

function deleteBook() {
  // console.log("Clicking delete button");
}

function back() {
  // console.log("Clicking back button");
}


function clearAll() {
  // console.log("Clicking Clearing All Button");
}

