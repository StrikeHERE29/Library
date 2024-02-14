const form = document.querySelector("#form")
let userInput = document.querySelectorAll(".books");




const book1 = new Book("dada", "elChapo", "200", "yes");
const book2 = new Book("da", "elChapo", "200", "yes");
const book3 = new Book("d", "elChapo", "200", "yes");


console.log(book1, book2, book3)
const myLibrary = [book1, book2, book3];

function Book(title, author, pages, liked){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.liked = liked;
    this.info = function(){
        return `${this.title}, ${this.author}, ${this.pages}, ${this.liked}` 
    }
}



const addBookToLibrary = (e)=>{
e.preventDefault();

let title = document.querySelector("#title").value;
let author = document.querySelector("#author").value;
let pages= parseInt(document.querySelector("#pages").value);
let liked = document.querySelector("#liked").value;
    
let newBook = new Book(title, author, pages, liked);

myLibrary.push(newBook)

}

