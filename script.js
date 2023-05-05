const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".add-book-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
// const newBookModal = document.querySelector(".book-form");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

addBookBtn.addEventListener("click", () => {
  modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
});
