import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {fetchBooks} from '../utils/BookService'
import {fetchAuthors} from '../utils/AuthorService'
import {FilteredBooks} from './FilteredBooks'
import {Navbar} from './Navbar'

export function Main() {
    let navigate = useNavigate(); 

    const [books, setBooks] = useState([])
    const [authors, setAuthors] = useState([])
    const [filteredBooks, setFilteredBooks] = useState([])

    useEffect(() => {
        loadBooks();
        loadAuthors()
    }, [])
    
    const loadBooks = async () => {
        try {
            const booksData = await fetchBooks()
            setBooks(booksData)
            setFilteredBooks(booksData)
            console.log("filtered: ", filteredBooks)
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
        <>
            <Navbar setFilteredBooks={setFilteredBooks} isMainPage={true} />
            {filteredBooks ? (
                <FilteredBooks books={filteredBooks} />
            ) : (
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
            )}
        </>
        // <div className="book-grid">
        //     {books.map((book) => (
        //         <div className="book-item" key={book.bookID} onClick={() => handleBookClick(book)}>
        //             <h3>{book.title}</h3>
        //             <p>Author: {book.author.name}</p>
        //             <p>Genre: {book.genre}</p>
        //             <p>Published year: {book.publishedYear}</p>
        //             <p>Pages: {book.pages}</p>
        //         </div>
        //     ))}
        // </div>
    )

}