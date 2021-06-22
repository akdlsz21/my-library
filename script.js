const myLibrary = [];

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		// it is always better to return a statement, and console.log() the function and not directly console.log in the function body directly.
		// return the info string and log it after the function has been called
		return `${title}'s author is ${author} that has ${pages} pages. Is it currently read? ${read}`;
	};
}

const theHobbit = new Book('The Hobbit', 'J.R.R', '295', 'no');

// DOM elements
let bookList = document.querySelector('.library-list');
let title = document.querySelector('.title');
let author = document.querySelector('.author');
let pages = document.querySelector('.pages');
let read = document.querySelector('.read');
let submit = document.querySelector('.submit');
let form = document.querySelector('.form');
let bookListChildNode = bookList.childNodes;
// let list = document.querySelectorAll('.list');

// function when submit, elements in form will push into myLibrary.
form.addEventListener('submit', (e) => {
	e.preventDefault();
	let titleArg;
	let authorArg;
	let pagesArg;
	let readArg;
	titleArg = form.title.value;
	authorArg = form.author.value;
	pagesArg = form.pages.value;
	readArg = form.read.value;

	addBookToLibrary(titleArg, authorArg, pagesArg, readArg);
});

// function to add book object to mylibrary array and print info to list
function addBookToLibrary(title, author, pages, read) {
	const book = new Book(title, author, pages, read);
	myLibrary.push(book);
	printBookInfo(myLibrary);
}

// function to textContent myLibrary array text
function printBookInfo(array) {
	eraseListChild();
	array.forEach((element) => {
		// needs to create new li element to attach element.info();//
		let newList = document.createElement('li');
		newList.className = 'list';
		let listTextNode = document.createTextNode(element.info());
		newList.textContent = listTextNode.textContent;
		bookList.appendChild(newList);
	});
}

// function to erase childElementNode in list,
function eraseListChild() {
	while (bookList.lastChild) {
		bookList.removeChild(bookList.lastChild);
	}
}
