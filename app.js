const bookLibrary = [];
//Reworkd for classes
let book;



const bookTitle = document.getElementById(`book-title`);
const bookAuthor = document.getElementById(`book-author`);
const bookPages = document.getElementById(`book-pages`);
const bookDate = document.getElementById(`book-date`);
const haveRead = document.getElementById(`have-read`);
const main = document.querySelector(`main`);
const body = document.querySelector(`body`);
const bookList = document.querySelector(`.book-list`);
const title = document.querySelector(`.title`);

const bookVariable = [bookTitle, bookAuthor, bookPages, bookDate, haveRead];

//Clears form after closing or adding book
function clearForm(array) {
  haveRead.checked = false;
  array.map((variable) => (variable.value = ``));
}
const bookArea = document.querySelector(`.book-content`);

const titleOfBookList = document.querySelector(`.title-list`);
const authorOfBookList = document.querySelector(`.author-list`);
const pagesOfBookList = document.querySelector(`.pages-list`);
const releaseOfBookList = document.querySelector(`.release-list`);
const readOfBookList = document.querySelector(`.read-list`);

function displayBooks(array) {
  const bookElemet = document.createElement(`div`);
  bookElemet.classList.add(`book-number${bookLibrary.length}`);
  bookArea.appendChild(bookElemet);

  const titleOfBookDisplay = document.createElement(`div`);
  titleOfBookDisplay.classList.add(`title-of-book-display`);
  bookElemet.appendChild(titleOfBookDisplay);

  const authorOfBookDisplay = document.createElement(`div`);
  authorOfBookDisplay.classList.add(`author-of-book-display`);
  bookElemet.appendChild(authorOfBookDisplay);

  const pagesOfBookDisplay = document.createElement(`div`);
  pagesOfBookDisplay.classList.add(`pages-of-book-display`);
  bookElemet.appendChild(pagesOfBookDisplay);

  const releaseOfBookDisplay = document.createElement(`div`);
  releaseOfBookDisplay.classList.add(`release-of-book-display`);
  bookElemet.appendChild(releaseOfBookDisplay);

  const readOfBookDisplay = document.createElement(`div`);
  readOfBookDisplay.classList.add(`read-of-book-display`);
  readOfBookDisplay.addEventListener(`click`, () => {
    if (readOfBookDisplay.style.cssText == "background-color: green;") {
      readOfBookDisplay.style.cssText = "background-color: red;";
    } else if (readOfBookDisplay.style.cssText == "background-color: red;") {
      readOfBookDisplay.style.cssText = "background-color: green;";
    }
  });
  bookElemet.appendChild(readOfBookDisplay);

  const removeBook = document.createElement(`button`);
  removeBook.classList.add(`remove-button`);
  removeBook.textContent = `Remove`;
  bookElemet.appendChild(removeBook);
  removeBook.addEventListener(`click`, () => {
    bookElemet.remove();
  });

  array.map(
    (book) => (titleOfBookDisplay.textContent = book.title),
    (authorOfBookDisplay.textContent = book.author),
    (pagesOfBookDisplay.textContent = book.pages),
    (releaseOfBookDisplay.textContent = book.date),
    book.read == true
      ? (readOfBookDisplay.style.cssText = "background-color: green;")
      : (readOfBookDisplay.style.cssText = "background-color: red;")
  );
}

function Book(title, author, pages, date, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.date = date),
    (this.read = read);
}

const bookForm = document.querySelector(`.book-form-pop`);

const openForm = document.querySelector(`.add-book`);
openForm.addEventListener(`click`, () => {
  bookForm.showModal();
  console.log(`works open form`);
});

const addBookButton = document.querySelector(`.add-book-button`);
addBookButton.addEventListener(`click`, () => {
  console.log(`submit works`);
  if (!bookTitle.value == ``) {
    book = new Book(
      bookTitle.value,
      bookAuthor.value,
      bookPages.value,
      bookDate.value,
      haveRead.checked
    );
    bookLibrary.push(book);
    displayBooks(bookLibrary);
  }
  if (!bookTitle.value == ``) {
    bookForm.setAttribute(`closing`, "");
    bookForm.addEventListener(
      `animationend`,
      () => {
        bookForm.removeAttribute(`closing`);
        bookForm.close();
      },
      { once: true }
    );
    clearForm(bookVariable);
  }
});

const closeForm = document.querySelector(`.icon-close`);
closeForm.addEventListener(`click`, () => {
  bookForm.setAttribute(`closing`, "");
  bookForm.addEventListener(
    `animationend`,
    () => {
      bookForm.removeAttribute(`closing`);
      bookForm.close();
    },
    { once: true }
  );

  clearForm(bookVariable);
});
