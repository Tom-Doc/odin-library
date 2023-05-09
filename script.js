const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".add-book-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const submitBookBtn = document.querySelector(".submit-book-btn");
const bookFormRows = document.querySelectorAll(".form-row");
const bookBody = document.querySelector(".book-list-section");

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
  let read = document.querySelector("#read").value.toUpperCase();
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBooks();
  document
    .querySelectorAll(".individual-book")
    .forEach((book) => (book.style.display = "block"));
}

function displayBooks() {
  bookBody.innerHTML = ""; // Clear existing books

  myLibrary.forEach((book) => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("individual-book");

    const title = document.createElement("p");
    title.textContent = `Book: ${book.title}`;
    bookDiv.appendChild(title);

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;
    bookDiv.appendChild(author);

    const pages = document.createElement("p");
    pages.textContent = `Pages: ${book.pages}`;
    bookDiv.appendChild(pages);

    const read = document.createElement("p");
    read.textContent = `Read: ${book.read}`;
    bookDiv.appendChild(read);

    bookBody.appendChild(bookDiv);
  });
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
