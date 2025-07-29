let myLibrary = [];
let i = 0;
let cardContainer = document.querySelector(".cards");
let newBookBut = document.querySelector(".new-book");
let dialog = document.querySelector("dialog");
let cancelBut = document.querySelector(".cancel-but");
let addBookBut = document.querySelector(".add-book-but");
let titleInput = document.querySelector("#book_title");
let authorInput = document.querySelector("#book_author");
let pagesInput = document.querySelector("#book_pages");

function Book(title, author, pages, read, displayStatus) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.displayStatus = displayStatus;
}

function addBookToLibrary(title, author, pages, read, displayStatus) {
    myLibrary[i++] = new Book(title, author, pages, read, displayStatus);
}

function displayBooks() {
    myLibrary.forEach((book) => {
        if (book.displayStatus !== 1) {
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

            book.displayStatus = 1;
        }
    });
}

newBookBut.addEventListener("click", () => {
    dialog.showModal();
});

cancelBut.addEventListener("click", () => {
    dialog.close();
});

addBookBut.addEventListener("click", () => {
    let statusRadio = document.querySelector("input[name='status']:checked");
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, statusRadio.value, 0);
    displayBooks();
});

addBookToLibrary("Mistborn", "Sanderson", 500, "Not read yet", 0);
addBookToLibrary("Blood of Elves", "Sapkwoski", 600, "Read", 0);
addBookToLibrary("Fellowship of the Ring", "Tolkien", 1000, "Not read yet", 0);
addBookToLibrary("Goblet of Fire", "Rowling", 500, "Read", 0);
displayBooks();