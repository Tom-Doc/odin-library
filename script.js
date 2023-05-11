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
  myLibrary.unshift(newBook);
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

    const readText = document.createElement("p");
    readText.style.display = "inline-block";
    readText.textContent = "Read: ";
    bookDiv.appendChild(readText);

    const readBtn = document.createElement("button");
    readBtn.classList.add("read-btn"); // Add a class to the button to style in CSS
    readBtn.textContent = book.read === "YES" ? "Read" : "Not Read"; //If dropdown YES is selected then toggle button displayed Read, it NO is selected then toggle reads Not Read
    readBtn.addEventListener("click", () => {
      book.read = book.read === "YES" ? "NO" : "YES";
      readBtn.textContent = book.read === "YES" ? "Read" : "Not Read";
    });
    bookDiv.appendChild(readBtn);

    const removeBook = document.createElement("button");
    removeBook.classList.add("remove-book-btn"); // Add a class to the button to style in CSS
    removeBook.textContent = "Remove Book";
    removeBook.addEventListener("click", () => {
      bookDiv.remove();
    });
    bookDiv.appendChild(removeBook);

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
