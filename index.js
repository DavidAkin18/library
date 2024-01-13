const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead= function() {
    this.read != this.read
}

//toggle the object
function toggleRead(index){
    myLibrary[index].toggleRead()
    render();
}

//this makes it go back to html as attributes
function render(){
    const library =document.querySelector('.library');
    library.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        const bookLi =  document.createElement('div');
        bookLi.classList.add('card')
        bookLi.innerHTML = `
            <div class="card-head">
            <h3>${book.author}</h3>
            <h5>${book.title}</h5>
            </div>
            <div class="card-body">
                <p>${book.pages} Pages</p>
                <p class="read-status">${book.read ? "read already" : "Not Read Yet"}</p>
                <button class="remove-btn btn-do" onclick="removeBook(${i})">Remove</button>
                <button class="toggle-btn btn-do" onclick ="toggleRead(${i})">Toggle Read</botton>
            </div>
            `;
        library.appendChild(bookLi);
    }
} 

//removes the listed item
function removeBook(index){
    myLibrary.splice(index, 1)
    render();
}


function addBookToLibrary() {
  let author = document.querySelector("#author").value;
  let title = document.querySelector("#title").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(author, title, pages, read);
  myLibrary.push(newBook);
  render();
}addBookToLibrary()


let button = document.querySelector('#new-book-btn');
button.addEventListener('click', ()=>{
    let newBookForm = document.querySelector('#new-form');
    newBookForm.style.display ='block';
})

document.querySelector('#new-form').addEventListener('submit', (event)=>{
    event.preventDefault();
    addBookToLibrary();
})