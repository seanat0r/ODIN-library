const myLibrary = [
	{
		name: "1984",
		author: "George Orwell",
		pages: 328,
		read: true,
		genre: "Dystopian",
	},
	{
		name: "To Kill a Mockingbird",
		author: "Harper Lee",
		pages: 281,
		read: true,
		genre: "Fiction",
	},
	{
		name: "The Hobbit",
		author: "J.R.R. Tolkien",
		pages: 310,
		read: false,
		genre: "Fantasy",
	},
	{
		name: "The Catcher in the Rye",
		author: "J.D. Salinger",
		pages: 277,
		read: false,
		genre: "Fiction",
	},
	{
		name: "Moby-Dick",
		author: "Herman Melville",
		pages: 635,
		read: true,
		genre: "Adventure",
	},
];

const formBook = document.querySelector("#bookForm");
const title = formBook.elements["Title"];
const author = formBook.elements["Author"];
const pages = formBook.elements["Pages"];
const read = formBook.elements["Read"];
const genre = formBook.elements["Genre"];

const aside = document.querySelector("#aside");

const selectBtn = document.querySelector("#selectBtn");
const btnTable = document.querySelector("#BtnTable");
const btnList = document.querySelector("#BtnList");
const btnAdd = document.querySelector("#BtnAdd");

const table = document.querySelector("#bookTable");
const list = document.querySelector("#list");

const tabelBody = document.querySelector("#tabelBody");

function Book(name, author, pages, read, genre) {
	this.name = name;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.genre = genre;
}

function addBookToLibrary(event) {
	event.preventDefault();

	let myBook = new Book(
		title.value,
		author.value,
		pages.value,
		read.value,
		genre.value
	);
	myLibrary.push(myBook);

	if (document.querySelector("#table")) {
		setTableDisplay();
	}
	if (document.querySelector("#list")) {
		setListDisplay();
	}
}

function removeBook(click) {
	let deletingBook = parseInt(click.getAttribute("data-Index"));

	myLibrary.splice(deletingBook, 1);

	if (document.querySelector("#table")) {
		setTableDisplay();
	}
	if (document.querySelector("#list")) {
		setListDisplay();
	}
}

function changeReadStatus(click) {
	let parentClick = click.parentNode;

	let bookIndex = parseInt(parentClick.getAttribute("data-Index"));

	let book = myLibrary[bookIndex];

	if (book.read) {
		book.read = false;
	} else {
		book.read = true;
	}

	if (document.querySelector("#table")) {
		setTableDisplay();
	}
	if (document.querySelector("#list")) {
		setListDisplay();
	}
}

function displayCardItem(element, index) {
	const newUl = document.createElement("ul");
	list.appendChild(newUl);
	newUl.setAttribute("data-Index", index);

	for (let information = 0; information <= 5; ++information) {
		const newLi = document.createElement("li");
		const newBtn = document.createElement("button");
		if (information === 0) {
			let newContentName = element.name;
			newLi.innerText = newContentName;
			newUl.appendChild(newLi);
			newLi.classList.add("name");
		} else if (information === 1) {
			let newContentAuthor = element.author;
			newLi.innerText = newContentAuthor;
			newUl.appendChild(newLi);
		} else if (information === 2) {
			let newContentPages = element.pages;
			newLi.innerText = newContentPages;
			newUl.appendChild(newLi);
		} else if (information === 3) {
			let newContentRead = element.read;
			newLi.innerText = newContentRead;
			newUl.appendChild(newLi);
			newLi.classList.add("readIt");
			newLi.getAttribute("data-read", newLi.innerText);
		} else if (information === 4) {
			let newContentGenre = element.genre;
			newLi.innerText = newContentGenre;
			newUl.appendChild(newLi);
		} else if (information === 5) {
			newBtn.innerText = "🗑️";
			newUl.appendChild(newBtn);
			newBtn.classList.add("newBtnList");
		}
	}
}

function setListDisplay() {
	list.innerHTML = "";
	myLibrary.forEach(displayCardItem);
}

function displayItemRow(element, index) {
	const newTr = document.createElement("tr");
	tabelBody.appendChild(newTr);
	newTr.setAttribute("data-Index", index);

	for (let information = 0; information <= 5; ++information) {
		const newTd = document.createElement("td");
		const newBtn = document.createElement("button");
		if (information === 0) {
			let newContentName = element.name;
			newTd.innerText = newContentName;
			newTr.appendChild(newTd);
		} else if (information === 1) {
			let newContentAuthor = element.author;
			newTd.innerText = newContentAuthor;
			newTr.appendChild(newTd);
		} else if (information === 2) {
			let newContentPages = element.pages;
			newTd.innerText = newContentPages;
			newTr.appendChild(newTd);
		} else if (information === 3) {
			let newContentRead = element.read;
			newTd.innerText = newContentRead;
			newTr.appendChild(newTd);
			newTd.classList.add("readIt");
			newTd.getAttribute("data-read", newTd.innerText);
		} else if (information === 4) {
			let newContentGenre = element.genre;
			newTd.innerText = newContentGenre;
			newTr.appendChild(newTd);
		} else if (information === 5) {
			newBtn.innerText = "🗑️";
			newTr.appendChild(newBtn);
			newBtn.classList.add("newBtn");
		}
	}
}
function setTableDisplay() {
	tabelBody.innerHTML = "";
	myLibrary.forEach(displayItemRow);
}
function activatTable() {
	document.querySelector("#table").style.display = "block";
	document.querySelector("#list").style.display = "none";
	setTableDisplay();
}
function activatList() {
	document.querySelector("#list").style.display = "flex";
	document.querySelector("#table").style.display = "none";
	setListDisplay();
}
function activatAdd() {
	aside.style.display = "block";
}

function clickOnBtnDisplay(event) {
	let click = event.target;
	console.log(click);
	if (click === btnTable) {
		activatTable();
	} else if (click === btnList) {
		activatList();
	} else if (click === btnAdd) {
		activatAdd();
	} else if (
		click.classList.contains("newBtn") ||
		click.classList.contains("newBtnList")
	) {
		console.log("delete");
		removeBook(click);
	} else if (click.classList.contains("readIt")) {
		changeReadStatus(click);
	}
	if (!aside.contains(click) && click !== btnAdd) {
		aside.style.display = "none";
	}
}

document.addEventListener("click", clickOnBtnDisplay);
document.addEventListener("submit", addBookToLibrary);
