import bookRepository from "../repositories/book.repositories.js";

async function createBookService(newBook, userId) {
    const createdBook = await bookRepository.createBookReposetory(
        newBook,
        userId
    )
    if (!createdBook) throw new Error("Error creating Book")
        return createdBook
}

async function findAllBookService() {
    const books = await bookRepository.findAllBookRepository()
    return books
}

async function findBookByIdService(bookId) {
    const book = await bookRepository.findBookByIdRepository(bookId)
    if (!book) throw new Error("Book not found")
    return book 
}

async function updateBookService(updatedBook, bookId, userId) {
    const book = await bookRepository.findBookByIdRepository(bookId)
    if (!book) throw new Error("Book not found")
    if (book.userId !== userId) throw new Error("Unauthorized")
        const response = await bookRepository.updateBookRepository(
    updatedBook,
    bookId
    )
    return response
}

 async function deleteBookService(bookId, userId) {
    const book = await bookRepository.findAllBookRepository(bookId)
    if (!book) throw new Error("Book not found")
    if (book.userId !== userId) throw new Error ("Unauthorized")
    const response = await bookRepository.deleteBookRepository(bookId)
    return response
}

async function searchBooksService(search) {
    if (!search) return await bookRepository.findAllBookRepository()
    const books = await bookRepository.searchBooksRepository(search)
    return books
}

export default {
    createBookService,
    findAllBookService,
    findBookByIdService,
    updateBookService,
    deleteBookService,
    searchBooksService 
}