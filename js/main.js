let myLibrary = [];

function Books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  myLibrary.forEach((element) => {
    console.log(element);
  });
}

//Create Navbar
const body = document.querySelector("body");
const navbar = document.createElement("div");
navbar.classList.add("navbar");
navbar.textContent = "My library";
body.append(navbar);

//Add Books Button
const btnContainer = document.createElement("div");
const addBookBtn = document.createElement("button");
btnContainer.classList.add("btnContainer");
addBookBtn.classList.add("btn");
addBookBtn.textContent = "Add book";
navbar.after(btnContainer);
btnContainer.appendChild(addBookBtn);

//"Add Book"-Feature

//Create Elements
const lTitle = document.createElement("label");
const iTitle = document.createElement("input");
const lAuthor = document.createElement("label");
const iAuthor = document.createElement("input");
const lPages = document.createElement("label");
const iPages = document.createElement("input");
const lRead = document.createElement("label");
const iRead = document.createElement("input");
const bookContainer = document.createElement("div");
const bookDiv = document.createElement("div");
const addBtn = document.createElement("button");
bookContainer.classList.add("bookContainer");

//Title
lTitle.classList.add("title");
lTitle.textContent = "Title";
lTitle.name = "title";
iTitle.classList.add("title");
iTitle.type = "text";
iTitle.for = "title";
iTitle.textContent = "Title";
iTitle.required = true;
const cloneTitle = lTitle.cloneNode(true);

//Author
lAuthor.classList.add("author");
lAuthor.textContent = "Author";
lAuthor.name = "author";
iAuthor.classList.add("author");
iAuthor.type = "text";
iAuthor.for = "author";
iAuthor.textContent = "Author";
iAuthor.required = true;
const cloneAuthor = lAuthor.cloneNode(true);

//Pages
lPages.classList.add("pages");
lPages.textContent = "Pages";
lPages.name = "pages";
iPages.classList.add("pages");
iPages.type = "number";
iPages.for = "pages";
iPages.textContent = "pages";
iPages.required = true;
const clonePages = lPages.cloneNode(true);

//Read
lRead.classList.add("read");
lRead.textContent = "Did you read the book?";
lRead.name = "read";
iRead.classList.add("read");
iRead.type = "checkbox";
iRead.for = "read";
iRead.textContent = "read";
const cloneRead = lRead.cloneNode(true);

//Add Book-Button
addBtn.classList.add("btn");
addBtn.textContent = "Add";

//Form
bookDiv.classList.add("bookDiv");
bookContainer.style.display = "none";
btnContainer.after(bookContainer);
bookContainer.appendChild(bookDiv);
bookDiv.appendChild(lTitle);
bookDiv.appendChild(iTitle);
bookDiv.appendChild(lAuthor);
bookDiv.appendChild(iAuthor);
bookDiv.appendChild(lPages);
bookDiv.appendChild(iPages);
bookDiv.appendChild(lRead);
bookDiv.appendChild(iRead);
bookDiv.appendChild(addBtn);

//Flex Layout for each Book
const libDiv = document.createElement("div");
const cards = document.createElement("div");
const libTitle = document.createElement("input");
const libAuthor = document.createElement("input");
const libPages = document.createElement("input");
const libRead = document.createElement("input");

//Toggle Forms
function toggleAddBook() {
  if (bookContainer.style.display === "none") {
    bookContainer.style.display = "flex";
    addBookBtn.textContent = "Close";
    addBookBtn.classList.add("btn-close");
  } else {
    bookContainer.style.display = "none";
    addBookBtn.textContent = "Add Book";
    addBookBtn.classList.remove("btn-close");
  }
}

function toggleLibrary() {
  if (libDiv.style.display === "flex") {
    libDiv.style.display = "none";
  } else {
    libDiv.style.display = "flex";
  }
}

addBookBtn.addEventListener("click", function (e) {
  toggleAddBook();
  toggleLibrary();
});

//Display Title
libTitle.type = "text";
libTitle.classList.add("title");
libTitle.for = "title";
libTitle.disabled = true;
libTitle.value = "The Game of Thrones";

//Display Author
libAuthor.type = "text";
libAuthor.classList.add("author");
libAuthor.for = "author";
libAuthor.disabled = true;
libAuthor.value = "George R. R. Martin";

//Display Pages
libPages.type = "text";
libPages.classList.add("pages");
libPages.for = "pages";
libPages.disabled = true;
libPages.value = 864;

//Display Read
libRead.type = "checkbox";
libRead.classList.add("read");
libRead.for = "read";
libRead.checked = true;

//Cards
cards.classList.add("card");

//Div Container
libDiv.style.display = "flex";
libDiv.classList.add("libDiv");

//Add Layout
bookContainer.after(libDiv);
libDiv.appendChild(cards);
cards.appendChild(cloneTitle);
cards.appendChild(libTitle);
cards.appendChild(cloneAuthor);
cards.appendChild(libAuthor);
cards.appendChild(clonePages);
cards.appendChild(libPages);
cards.appendChild(cloneRead);
cards.appendChild(libRead);

const myCards = [];
const myLabelTitle = [];
const myInputTitle = [];
const myLabelAuthor = [];
const myInputAuthor = [];
const myLabelPages = [];
const myInputPages = [];
const myLabelRead = [];
const myInputRead = [];
let last_element;
let index = "";
let n = 0;

function createNewCard() {
  myLabelTitle.push("label_title" + n);
  myInputTitle.push("input_title" + n);
  myLabelAuthor.push("label_author" + n);
  myInputAuthor.push("input_author" + n);
  myLabelPages.push("label_pages" + n);
  myInputPages.push("input_pages" + n);
  myLabelRead.push("label_read" + n);
  myInputRead.push("input_read" + n);
  myLabelTitle[n] = lTitle.cloneNode(true);
  myInputTitle[n] = iTitle.cloneNode(true);
  myLabelAuthor[n] = lAuthor.cloneNode(true);
  myInputAuthor[n] = iAuthor.cloneNode(true);
  myLabelPages[n] = lPages.cloneNode(true);
  myInputPages[n] = iPages.cloneNode(true);
  myLabelRead[n] = lRead.cloneNode(true);
  myInputRead[n] = iRead.cloneNode(true);
  index = "card-" + n;
  myCards.push("cards" + n);
  myCards[n] = document.createElement("div");
  myCards[n].classList.add("card");
  myCards[n].setAttribute("id", "card-" + n);
  if (myCards.length === 1) {
    cards.after(myCards[n]);
  } else {
    last_element.after(myCards[n]);
  }
  myCards[n].appendChild(myLabelTitle[n]);
  myCards[n].appendChild(myInputTitle[n]);
  myCards[n].appendChild(myLabelAuthor[n]);
  myCards[n].appendChild(myInputAuthor[n]);
  myCards[n].appendChild(myLabelPages[n]);
  myCards[n].appendChild(myInputPages[n]);
  myCards[n].appendChild(myLabelRead[n]);
  myCards[n].appendChild(myInputRead[n]);
  last_element = document.getElementById("card-" + n);
}

function addBookToLibrary() {
  myLibrary.forEach((element) => {
    if (element.read === "Read") {
      myInputTitle[n].value = element.title;
      myInputAuthor[n].value = element.author;
      myInputPages[n].value = element.pages;
      myInputRead[n].checked = true;
    } else {
      myInputTitle[n].value = element.title;
      myInputAuthor[n].value = element.author;
      myInputPages[n].value = element.pages;
      myInputRead[n].checked = false;
    }
  });
  n += 1;
}

//Clear input for add Book
function clearInputs() {
  iTitle.value = "";
  iAuthor.value = "";
  iPages.value = "";
  iRead.checked = false;
}

addBtn.addEventListener("click", function (e) {
  if (iRead.checked) {
    myLibrary.push(new Book(iTitle.value, iAuthor.value, iPages.value, "Read"));
  } else {
    myLibrary.push(
      new Book(iTitle.value, iAuthor.value, iPages.value, "Not read")
    );
  }
  createNewCard();
  addBookToLibrary();
  toggleLibrary();
  toggleAddBook();
  clearInputs();
});
