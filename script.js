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
        let title = document.createElement("li");
        title.textContent = book.title;
        let author = document.createElement("li");
        author.textContent = book.author;
        let pages = document.createElement("li");
        pages.textContent = book.pages;
        let read = document.createElement("li");
        read.textContent = book.read;
        cardContainer.appendChild(cardDiv);
        cardDiv.appendChild(cardIcon);
        cardDiv.appendChild(cardList);
        cardList.appendChild(title);
        cardList.appendChild(author);
        cardList.appendChild(pages);
        cardList.appendChild(read);
    });
}

// addBookToLibrary("Mistborn", "Sanderson", 500, "Not read yet");
// addBookToLibrary("Blood of Elves", "Sapkwoski", 600, "Read");
// addBookToLibrary("Fellowship of the Ring", "Tolkien", 1000, "Not read yet");
// addBookToLibrary("Goblet of Fire", "Rowling", 500, "Read");
// displayBooks();