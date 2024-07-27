//Declerations
//Load default Books
const myLibrary = [
	new Book("The Hobbit", "J.R.R. Tolkien", "295", "Read"),
	new Book("The Lord of the Rings", "J.R.R. Tolkien", "1216", "Not read"),
	new Book("Eragon", "Christopher Paolini", "736", "Read"),
];
const library = document.querySelector(".library");
const form = document.getElementById("addBookForm");
const formBtn = document.querySelector(".btn-primary");
const btnAddBook = document.querySelector(".btnBook");

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(book) {
	//check if book already exists
	const exists = myLibrary.some(
		(b) => b.title === book.title && b.author === book.author
	);
	if (!exists) {
		myLibrary.push(book);
		displayBook();
	}
}

function displayBook() {
	myLibrary.forEach((element, index) => {
		const card = document.createElement("div");
		card.id = "card";
		card.dataset.index = index;

		card.innerHTML = `
		<p>Title: ${element.title}</p>
		<p>Author: ${element.author}</p>
		<p>Pages: ${element.pages}</p>

		<div class="btnCardContainer">
			<button class="btn btn-secondary btn-toggle-read">${element.read}</button>
			<button class="btn btn-secondary btn-toggle-read">Remove</button>
		</div>
		`;
		library.append(card);
	});
}

btnAddBook.addEventListener("click", () => {
	document.querySelector(".form-popup").style.display = "block";
	document.querySelector(".btnDiv").style.display = "none";
	container.style.display = "none";
});

//Form functionality

//Prevent form-submit
form.addEventListener("submit", (e) => {
	e.preventDefault();

	const title = document.querySelector(".inputTitle").value;
	const author = document.querySelector(".inputAuthor").value;
	const pages = document.querySelector(".inputPages").value;
	const radioRead = document.getElementById("radio-read").value;
	let read = "";
	if (radioRead.checked) {
		read = "Read";
	} else {
		read = "Not read";
	}

	const newBook = new Book(title, author, pages, read);
	document.querySelector(".form-popup").style.display = "none";
	document.querySelector(".btnDiv").style.display = "flex";
	container.style.display = "grid";
	addBookToLibrary(newBook);
});

document.addEventListener("DOMContentLoaded", () => {
	displayBook();
});
