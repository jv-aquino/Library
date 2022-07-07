const addBookButton = document.querySelector('#addBook');
const cardsDiv = document.querySelector('.cards');

const form = document.querySelector('.form-container');
const cancelButton = document.querySelector('#cancel');

const readInput = document.querySelector('#read');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');

addBookButton.addEventListener('click', 
showForm);
cancelButton.addEventListener('click', cancelForm);

let bookLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary () {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = Number(pagesInput.value);
  let read = readInput.checked;

  bookLibrary.push(new Book(title, author, pages, read));

  clearInputs();
}

function clearInputs() {
  pagesInput.value = authorInput.value = titleInput.value = '';

  readInput.checked = false;
}

function showForm() {
  form.classList.add('visible');
}
function cancelForm() {
  form.classList.remove('visible');
  clearInputs
}