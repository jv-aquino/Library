const addBookButton = document.querySelector('#addBook');

const form = document.querySelector('.form-container');
const cancelButton = document.querySelector('#cancel');

let inputs = document.querySelectorAll("input[type='text'], input[type='number']");

const readInput = document.querySelector('#read');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');

const cardsDiv = document.querySelector('.cards');
const readButtons = document.querySelectorAll('.readButton');

addBookButton.addEventListener('click', 
showForm);
cancelButton.addEventListener('click', cancelForm);

inputs.forEach(input => {
  input.addEventListener('click', setValidity);
  input.addEventListener('mouseover', setValidity);
  input.addEventListener('focus', setValidity);
});

readButtons.forEach(button => {
  button.addEventListener('click', toggleRead);
});

let bookLibrary = [];

function Book(title, author, pages, read) {
  this.title = '<h2>' + title + "</h2>";

  this.author = '<p>' + author + "</p>";
  this.pages = '<p>' + pages + '</p>';

  this.read = '<button>' + ((read) ? 'Read' : 'Not Read') + "</button>";

  this.added = false;
}

function addBookToLibrary () {
  let title = titleInput.value;
  let author = authorInput.value;
  let pages = Number(pagesInput.value);
  let read = readInput.checked;

  bookLibrary.push(new Book(title, author, pages, read));

  clearInputs();

  inputs.forEach(input => {
    unsetValidity(input);
  });

  cancelForm();

  checkBooks();

  return false;
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

  clearInputs();

  inputs.forEach(input => {
    unsetValidity(input)
  });
}

function setValidity() {
  this.classList.add('validCheck');
}
function unsetValidity(input) {
  input.classList.remove('validCheck');
}

function checkBooks() {
  bookLibrary.forEach(book => {
    if (!book.added) {
      book.added = true;
      addBookToDOM(book);
    }
  });
}

function addBookToDOM(book) {
  console.log(book);
}

function toggleRead() {
  this.classList.toggle('read');
}