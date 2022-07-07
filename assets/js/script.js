const addBookButton = document.querySelector('#addBook');

const form = document.querySelector('.form-container');
const cancelButton = document.querySelector('#cancel');

let inputs = document.querySelectorAll("input[type='text'], input[type='number']");

const readInput = document.querySelector('#read');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');

const cardsDiv = document.querySelector('.cards');

let bookLibrary = [];

addBookButton.addEventListener('click', 
showForm);
cancelButton.addEventListener('click', cancelForm);

inputs.forEach(input => {
  input.addEventListener('click', setValidity);
  input.addEventListener('hover', setValidity);
  input.addEventListener('focus', setValidity);
});

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

  inputs.forEach(input => {
    unsetValidity(input);
  });

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