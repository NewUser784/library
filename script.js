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
        cardDiv.classList.toggle("card");
        let cardIcon = document.createElement("div");
        cardIcon.classList.toggle("card-icon");
        let cardList = document.createElement("ul");

        let titleText = document.createElement("p");
        titleText.textContent = book.title;
        let authorText = document.createElement("p");
        authorText.textContent = book.author;
        let pagesText = document.createElement("p");
        pagesText.textContent = book.pages;
        let readText = document.createElement("p");
        readText.textContent = book.read;

        let titleHeader = document.createElement("li");
        titleHeader.textContent = "Title: ";
        let authorHeader = document.createElement("li");
        authorHeader.textContent = "Author: ";
        let pagesHeader = document.createElement("li");
        pagesHeader.textContent = "Pages: ";
        let readHeader = document.createElement("li");
        readHeader.textContent = "Status: ";

        cardContainer.appendChild(cardDiv);
        cardDiv.appendChild(cardIcon);
        cardDiv.appendChild(cardList);
        cardList.appendChild(titleHeader);
        titleHeader.appendChild(titleText);
        cardList.appendChild(authorHeader);
        authorHeader.appendChild(authorText);
        cardList.appendChild(pagesHeader);
        pagesHeader.appendChild(pagesText);
        cardList.appendChild(readHeader);
        readHeader.appendChild(readText);
    });
}

// addBookToLibrary("Mistborn", "Sanderson", 500, "Not read yet");
// addBookToLibrary("Blood of Elves", "Sapkwoski", 600, "Read");
// addBookToLibrary("Fellowship of the Ring", "Tolkien", 1000, "Not read yet");
// addBookToLibrary("Goblet of Fire", "Rowling", 500, "Read");
// displayBooks();