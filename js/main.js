const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
	};
}

function addBookToLibrary(title, author, pages, read) {
	myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "not read");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "1216", "not read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "not read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "not read");

const container = document.querySelector(".container");

function displayBook(library) {
	library.forEach((element) => {
		const card = document.createElement("div");
		card.id = "card";
		container.append(card);
		card.textContent = element.info();
	});
}

displayBook(myLibrary);

const btnAddBook = document.querySelector(".btnBook");
btnAddBook.addEventListener("click", () => {
	document.querySelector(".form-popup").style.display = "block";
	document.querySelector(".btnDiv").style.display = "none";
	container.style.display = "none";
});

//Form functionality

//Prevent form-submit
const form = document.getElementById("addBookForm");
function handleForm(event) {
	event.preventDefault();
}
form.addEventListener("submit", handleForm);

const inputTitle = document.querySelector(".inputTitle");
const inputAuthor = document.querySelector(".inputAuthor");
const inputPages = document.querySelector(".inputPages");
const radioRead = document.getElementById("radio-read");
const radioNotRead = document.getElementById("radio-not-read");
const formBtn = document.querySelector(".btn-primary");

formBtn.addEventListener("click", () => {
	console.log(inputTitle.value);
	console.log(inputAuthor.value);
	console.log(inputPages.value);
	if (radioRead.checked) {
		console.log("Read");
	} else {
		console.log("Not read");
	}
});
