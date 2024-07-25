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
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "not read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "not read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "not read");

function displayBook(library) {
	library.forEach((element) => {
		console.log(element.info());
	});
}

displayBook(myLibrary);
