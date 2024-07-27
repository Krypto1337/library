//Declerations
//Load default Books
const myLibrary = [
	new Book("The Hobbit", "J.R.R. Tolkien", "295", "Read"),
	new Book("The Lord of the Rings", "J.R.R. Tolkien", "1216", "Not read"),
	new Book("Eragon", "Christopher Paolini", "736", "Read"),
];
const container = document.querySelector(".container");
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
		const btnContainer = document.createElement("div");
		btnContainer.className = "btnCardContainer";
		const pTitle = document.createElement("p");
		const pAuthor = document.createElement("p");
		const pPages = document.createElement("p");
		const btnToggleRead = document.createElement("button");
		const btnRemoveBook = document.createElement("button");

		card.id = "card";
		card.dataset.index = index;
		container.append(card);

		pTitle.textContent = `Title: ${element.title}`;
		card.appendChild(pTitle);

		pAuthor.textContent = `Author: ${element.author}`;
		card.appendChild(pAuthor);

		pPages.textContent = `Pages: ${element.pages}`;
		card.appendChild(pPages);
		card.appendChild(btnContainer);

		btnToggleRead.classList.add("btn", "btn-secondary", "btn-toggle-read");
		btnToggleRead.textContent = element.read;
		btnToggleRead.addEventListener("click", () => {
			if (btnToggleRead.textContent === "Read") {
				btnToggleRead.textContent = "Not read";
			} else {
				btnToggleRead.textContent = "Read";
			}
		});
		btnRemoveBook.classList.add("btn", "btn-secondary", "btn-remove-book");
		btnRemoveBook.textContent = "Remove";
		btnRemoveBook.addEventListener("click", (e) => {
			const index = e.target.closest(".btn-remove-book").dataset.index;
			myLibrary.splice(index, 1);
			displayBook(myLibrary);
		});
		btnContainer.appendChild(btnToggleRead);
		btnContainer.appendChild(btnRemoveBook);
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
