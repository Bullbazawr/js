"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/
const books = [
    { title: 'The Fellowship of the Ring', author: 'J.R.R.Tolkien' },
    { title: 'The Two Towers', author: 'J.R.R.Tolkien' },
    { title: 'The Return of the King', author: 'J.R.R.Tolkien' },
    { title: 'The Hobbit', author: 'J.R.R.Tolkien' },
    { title: 'Philosophers Stone', author: 'J.K.Rowling' },
    { title: 'Chamber of Secrets', author: 'J.K.Rowling' },
    { title: 'Prisoner of Azkaban', author: 'J.K.Rowling' },
    { title: 'The Goblet of Fire', author: 'J.K.Rowling' },
    { title: 'The Order of the Phoenix', author: 'J.K.Rowling' },
    { title: 'The Half-Blood Prince', author: 'J.K.Rowling' },
]




class Library {
    #books = books
    constructor(books) {
        this.books = books
        this.#checkForDuplicates(books)
    }
    #checkForDuplicates(books) {
        const titles = books.map(book => book.title)
        const uniqueTitles = [...new Set(titles)]
        if (titles.length!== uniqueTitles.length) {
            throw new Error('There are duplicates in the list of books')
        }
    }

    allBooks() {
        // this.#books.forEach(element => {
        //     console.log(element)  
        // })
        return this.#books
    }
    addBook(title, author) {
        const newBook = { title, author }
        this.#books.forEach(element => {
            if(newBook.title === element.title){
                throw new Error('This book is already in the list')
            }
        })
        this.#books.push(newBook)
    }
    removeBook(title) {
        if(!this.hasBook(title)){
            throw new Error('This book is not in the list')
        }
        this.#books.forEach(element => {
            if(element.title === title) {
                this.#books.splice(this.#books.indexOf(element), 1)
            }
        })
    }
    hasBook(title) {
        return this.#books.some(book => book.title === title)
    }
}

const library = new Library(books)

// console.log(library.allBooks())
// library.addBook('War and Peas', 'Lew Tolstoy')
// console.log(library.allBooks())
// library.removeBook('War and Peas')
// console.log(library.hasBook('War and Peas'))
// console.log(library.hasBook('The Fellowship of the Ring'))
// library.addBook('The Fellowship of the Ring', 'J.R.R.Tolkien')
// library.removeBook('War and Peas')