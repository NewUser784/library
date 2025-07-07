let myLibrary = [];
let i = 0;
let cardContainer = document.querySelector(".cards");

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    myLibrary[i++] = new Book(title, author, pages, read);
}

function displayBooks() {
    myLibrary.forEach((book) => {
        let cardDiv = document.createElement("div");
        cardDiv.textContent = book.title;
        cardContainer.appendChild(cardDiv);
    });
}

// addBookToLibrary("Mistborn", "Sanderson", 500, "Not read yet");
// addBookToLibrary("Blood of Elves", "Sapkwoski", 600, "Read");
// displayBooks();