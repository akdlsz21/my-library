let myLibrary = [];

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

function addToLibrary(book) {
	myLibrary.push(book);
}

addToLibrary(theHobbit);

console.log(myLibrary);
