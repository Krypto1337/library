//Declerations
const myLibrary = [];
const container = document.querySelector(".container");
const inputTitle = document.querySelector(".inputTitle");
const inputAuthor = document.querySelector(".inputAuthor");
const inputPages = document.querySelector(".inputPages");
const radioRead = document.getElementById("radio-read");
const radioNotRead = document.getElementById("radio-not-read");
const form = document.getElementById("addBookForm");
const formBtn = document.querySelector(".btn-primary");
const btnAddBook = document.querySelector(".btnBook");

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

function displayBook(library) {
	library.forEach((element, index) => {
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
function handleForm(event) {
	event.preventDefault();
}
form.addEventListener("submit", handleForm);

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

//Default Books
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "Read");
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", "1216", "Not read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "Not read");
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", "295", "Read");
displayBook(myLibrary);
