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
const selectBtn = document.querySelector("#selectBtn");
const btnTable = document.querySelector("#BtnTable");
const btnList = document.querySelector("#BtnList");

const table = document.querySelector("#bookTable");
const list = document.querySelector("#booklist");

function Book() {
	// the constructor...
}

function addBookToLibrary() {
	// do stuff here
}
function displayItems(element) {
	const newTh = document.createElement("th");
	let newContent
}
function setTableDisplay() {
	myLibrary.forEach(displayItems(element));
}
function activatTable() {
	document.querySelector("#table").style.display = "block";
	document.querySelector("#list").style.display = "none";
	setTableDisplay();
}
function activatList() {
	document.querySelector("#list").style.display = "block";
	document.querySelector("#table").style.display = "none";
}

function clickOnBtnDisplay(event) {
	let click = event.target;
	console.log(click);
	if (click === btnTable) {
		activatTable();
	} else if (click === btnList) {
		activatList();
	}
}

selectBtn.addEventListener("click", clickOnBtnDisplay);
