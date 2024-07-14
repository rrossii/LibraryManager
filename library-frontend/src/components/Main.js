import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {BookService, fetchBooks} from '../utils/BookService'
import {AuthorService, fetchAuthors} from '../utils/AuthorService'

export function Main() {
    let navigate = useNavigate(); 

    const [books, setBooks] = useState([])
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        loadBooks();
        loadAuthors()
    }, [])

    const loadBooks = async () => {
        try {
            const booksData = await fetchBooks()
            setBooks(booksData)
        } catch (error) {
            alert('Error loading books: ', error)
        }
    }

    const loadAuthors = async () => {
        try {
            const authorsData = await fetchAuthors()
            setAuthors(authorsData)
        } catch (error) {
            console.error('Error loading authors: ', error)
        }
    }

    const handleBookClick = (book) => {
        const bookID = book.bookID;
        let path = `/book/${bookID}`
        navigate(path)
    }

    return(
        <div className="book-grid">
            {books.map((book) => (
                <div className="book-item" key={book.bookID} onClick={() => handleBookClick(book)}>
                    <h3>{book.title}</h3>
                    <p>Author: {book.author.name}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Published year: {book.publishedYear}</p>
                    <p>Pages: {book.pages}</p>
                </div>
            ))}
        </div>
    )

}