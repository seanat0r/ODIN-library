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

const selectBtn = document.querySelector("#selectBtn");
const btnTable = document.querySelector("#BtnTable");
const btnList = document.querySelector("#BtnList");
const btnAdd = document.querySelector("#BtnAdd")

const table = document.querySelector("#bookTable");
const list = document.querySelector("#list");

const tabelBody = document.querySelector("#tabelBody");

function Book() {
	// the constructor...
}

function addBookToLibrary(event) {
	event.preventDefault();
	
}

function displayCardItem(element) {
	const newUl = document.createElement("ul");
	list.appendChild(newUl);

	for (let information = 0; information <= 5; ++information) {
		const newLi = document.createElement("li");
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
		} else if (information === 4) {
			let newContentGenre = element.genre;
			newLi.innerText = newContentGenre;
			newUl.appendChild(newLi);
		}
	}
}

function setListDisplay() {
	list.innerHTML = "";
	myLibrary.forEach(displayCardItem);
}

function displayItemRow(element) {
	const newTr = document.createElement("tr");
	tabelBody.appendChild(newTr);

	for (let information = 0; information <= 5; ++information) {
		const newTd = document.createElement("td");
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
		} else if (information === 4) {
			let newContentGenre = element.genre;
			newTd.innerText = newContentGenre;
			newTr.appendChild(newTd);
		}
	}
}
function setTableDisplay() {
	tabelBody.innerHTML = ""
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
	document.querySelector("#aside").style.display = "block";
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
	} else {
		
	}
}

document.addEventListener("click", clickOnBtnDisplay);
document.addEventListener("submit", addBookToLibrary);
