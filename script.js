const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".add-book-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const submitBookBtn = document.querySelector(".submit-book-btn");
const bookFormRows = document.querySelectorAll(".form-row");

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value;
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
}

addBookBtn.addEventListener("click", () => {
  modal.showModal();
});

submitBookBtn.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
  modal.close();

  // reset input fields
  bookFormRows.forEach((row) => {
    const input = row.querySelector("input");
    if (input) input.value = "";
  });
  const readSelect = document.querySelector("#read"); //reset the select/dropdown option
  readSelect.selectedIndex = 0;
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
});
