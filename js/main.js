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
addBookBtn.classList.add("btn");
addBookBtn.textContent = "Add book";
navbar.after(btnContainer);
btnContainer.appendChild(addBookBtn);
