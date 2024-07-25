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
});
