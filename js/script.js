const addBtn = document.querySelector(".header__add-btn");
const elForm = document.querySelector(".header__form");
const header = document.querySelector("header");
const main = document.querySelector("main");

// INPUTS
const elTitleInput = document.querySelector(".header__title-input");
const elAuthorInput = document.querySelector(".header__author-input");
const elPagesInput = document.querySelector(".header__pages-input");
const elReadInput = document.querySelector(".header__read-input");

let myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function renderData() {
    let list  = document.querySelector(".hero-section__list");
    list.innerHTML = ""
    for (let i = 0; i < myLibrary.length; i++) {
        let elBook = myLibrary[i];
        let bookItem = document.createElement("li");
        bookItem.classList.add("hero-section__item")
        bookItem.innerHTML = `
            <p class="hero-section__item-title">${elBook.name}</p>
            <p class="hero-section__item-author">By ${elBook.author}</p>
            <p class="hero-section__item-pages">${elBook.pages} pages</p>
            <p class="hero-section__item-read">${elBook.read.checked ? "Readen" : "Not readen"}</p>
            <button class="hero-section__item-delete" onClick="removeBook(${i})">Delete</button>
        `
        list.appendChild(bookItem);
    }
}

function removeBook(index) {
    myLibrary.splice(index,1);
    renderData()
}

function addBookToLibrary() {
    let name = elTitleInput.value;
    let author = elAuthorInput.value;
    let pages = elPagesInput.value;
    let read = elReadInput.value;
    let newBook = new Book(name, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    renderData()
}

addBtn.addEventListener("click", e => {
    e.preventDefault();
    main.classList.add("filter");
    header.classList.add("filter");
    elForm.classList.add("show");
})


elForm.addEventListener("submit", e => {
    e.preventDefault();

    addBookToLibrary();

    elForm.classList.remove("show");
    main.classList.remove("filter");
    header.classList.remove("filter");

    elTitleInput.value = "";
    elAuthorInput.value = "";
    elPagesInput.value = "";
    elReadInput.value = "";

})