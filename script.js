const modal = document.querySelector(".modal");
const addBookBtn = document.querySelector(".add-book-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const submitBookBtn = document.querySelector(".submit-book-btn");
const bookFormRows = document.querySelectorAll(".form-row");
const bookBody = document.querySelector(".book-list-section");

let myLibrary = [];

// Constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add book info from modal into myLibrary array
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").value.toUpperCase();
  let newBook = new Book(title, author, pages, read);
  myLibrary.unshift(newBook); //Using unshift instead of push will allow the books to fill the page starting with the newest add book first
  displayBooks();
  // Below will show book card when books are added (currently hidden in CSS)
  document
    .querySelectorAll(".individual-book")
    .forEach((book) => (book.style.display = "block"));
}

// Function to append all book info to DOM
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
    readText.style.display = "inline-block"; //Makes "Read: book.read" button below to be on same line
    readText.textContent = "Read: ";
    bookDiv.appendChild(readText);

    const readBtn = document.createElement("button");
    readBtn.classList.add("read-btn"); // Add a class to the button to style in CSS
    readBtn.textContent = book.read === "YES" ? "Read" : "Not Read"; //If dropdown YES is selected then toggle button displayed Read, it NO is selected then toggle reads Not Read
    // Below toggles book status from Read to Not Read and vice versa
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

    // Below appends all book info into the book-body div
    bookBody.appendChild(bookDiv);
  });
}

// Shows modal
addBookBtn.addEventListener("click", () => {
  modal.showModal();
});

// Submits modal info and closes modal after
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

// X button to close out of modal
closeModalBtn.addEventListener("click", () => {
  modal.close();
});
