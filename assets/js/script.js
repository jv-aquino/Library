const addBookButton = document.querySelector('#addBook');

const form = document.querySelector('.form-container');
const cancelButton = document.querySelector('#cancel');

let inputs = document.querySelectorAll("input[type='text'], input[type='number']");

const readInput = document.querySelector('#read');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');

const cardsDiv = document.querySelector('.cards');

addBookButton.addEventListener('click', 
showForm);
cancelButton.addEventListener('click', cancelForm);

inputs.forEach(input => {
  input.addEventListener('click', setValidity);
  input.addEventListener('mouseover', setValidity);
  input.addEventListener('focus', setValidity);
});

let bookLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;

  this.author = 'by ' + author;
  this.pages = pages + " pages";

  this.read = ((read) ? 'Read' : 'Not Read');

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
  let card = document.createElement('div');
  card.classList.add('card');

  let titleElement = document.createElement('h2');
  let authorElement = document.createElement('p');
  let pagesElement = document.createElement('p');
  let readElement = document.createElement('button');

  titleElement.textContent = book.title;
  authorElement.textContent = book.author;
  pagesElement.textContent = book.pages;
  readElement.textContent = book.read;

  readElement.addEventListener('click', toggleRead);

  readElement.classList.add('readButton');
  if (book.read == 'Read') {
    readElement.classList.add('read');
  }

  card.appendChild(titleElement);
  card.appendChild(authorElement);
  card.appendChild(pagesElement);
  card.appendChild(readElement);

  cardsDiv.appendChild(card);
}

function toggleRead() {
  this.classList.toggle('read');

  if (this.textContent == 'Read') {
    this.textContent = 'Not Read';
  }
  else {
    this.textContent = 'Read';
  }
}