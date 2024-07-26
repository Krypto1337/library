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

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "Read");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "1216", "Not read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "Not read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "Read");

function addBookToLibrary(title, author, pages, read) {
	myLibrary.push(new Book(title, author, pages, read));
}
const container = document.querySelector(".container");
let i = 0;
function displayBook(library) {
	library.forEach((element) => {
		const card = document.createElement("div");
		const pTitle = document.createElement("p");
		const pAuthor = document.createElement("p");
		const pPages = document.createElement("p");
		const btnToggleRead = document.createElement("button");
		card.id = "card";
		card.className = i;
		i++;
		container.append(card);
		pTitle.textContent = `Title: ${element.title}`;
		card.appendChild(pTitle);
		pAuthor.textContent = `Author: ${element.author}`;
		card.appendChild(pAuthor);
		pPages.textContent = `Pages: ${element.pages}`;
		card.appendChild(pPages);
		btnToggleRead.className = "btn";
		btnToggleRead.textContent = element.read;
		btnToggleRead.addEventListener("click", () => {
			if (btnToggleRead.textContent == "Read") {
				btnToggleRead.textContent = "Not read";
			} else {
				btnToggleRead.textContent = "Read";
			}
		});
		card.appendChild(btnToggleRead);
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
	if (radioRead.checked) {
		addBookToLibrary(
			inputTitle.value,
			inputAuthor.value,
			inputPages.value,
			"Read"
		);
	} else {
		addBookToLibrary(
			inputTitle.value,
			inputAuthor.value,
			inputPages.value,
			"Not read"
		);
	}
	displayBook(myLibrary);
	document.querySelector(".form-popup").style.display = "none";
	document.querySelector(".btnDiv").style.display = "flex";
	container.style.display = "grid";
});
