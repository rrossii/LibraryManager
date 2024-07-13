import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {BookService, fetchBooks, loadBooks} from '../utils/BookService'

export function Main() {
    let navigate = useNavigate(); 

    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    const loadBooks = async () => {
        try {
            const booksData = await fetchBooks()
            setBooks(booksData)
        } catch (error) {
            console.error('Error loading books:', error);
        }
    }

    const handleBookClick = (book) => {
        let path = "/getBook/${book.bookID}"
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