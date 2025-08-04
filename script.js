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
let defaultRadio = document.querySelector("#not_read");

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
    myLibrary.forEach((book, index) => {
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

            let butContainer = document.createElement("div");
            butContainer.classList.toggle("remove-but-container");
            let removeBookBut = document.createElement("button");
            removeBookBut.textContent = "Remove";
            removeBookBut.classList.toggle("remove-but");
            let toggleReadBut = document.createElement("button");

            if (book.read === "read") {
                toggleReadBut.textContent = "not read";
                toggleReadBut.classList.toggle("not-read-but");
            } else {
                toggleReadBut.textContent = "read";
                toggleReadBut.classList.toggle("read-but");
            }

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
            cardDiv.appendChild(butContainer);
            butContainer.appendChild(removeBookBut);
            butContainer.appendChild(toggleReadBut);

            removeBookBut.addEventListener("click", () => {
                myLibrary.splice(index, 1);
                cardContainer.removeChild(cardDiv);
                i--;
            });

            toggleReadBut.addEventListener("click", () => {
                book.toggleReadStatus();
                readText.textContent = book.read;

                if (book.read === "read") {
                    toggleReadBut.textContent = "not read";
                    toggleReadBut.classList.toggle("not-read-but");
                    toggleReadBut.classList.toggle("read-but");
                } else {
                    toggleReadBut.textContent = "read";
                    toggleReadBut.classList.toggle("read-but");
                    toggleReadBut.classList.toggle("not-read-but");
                }
            });

            book.displayStatus = 1;
        }
    });
}

newBookBut.addEventListener("click", () => {
    dialog.showModal();
    clearDialog();
});

cancelBut.addEventListener("click", () => {
    dialog.close();
});

function clearDialog() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    defaultRadio.checked = true;
}

addBookBut.addEventListener("click", () => {
    let statusRadio = document.querySelector("input[name='status']:checked");
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, statusRadio.value, 0);
    displayBooks();
});

Book.prototype.toggleReadStatus = function () {
    if (this.read === "read") {
        this.read = "not read yet";
    } else {
        this.read = "read";
    }
};

addBookToLibrary("Mistborn", "Brandon Sanderson", 672, "not read yet", 0);
addBookToLibrary("The Tower of Swallows", "Andrzej Sapkwoski", 464, "read", 0);
addBookToLibrary("The Fellowship of the Ring", "JRR Tolkien", 531, "not read yet", 0);
addBookToLibrary("Shoedog", "Phil Knight", 400, "read", 0);
displayBooks();