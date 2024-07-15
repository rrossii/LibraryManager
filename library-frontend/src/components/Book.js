import { useEffect, useState } from "react";
import default_img from "../resources/book-cover-default.jpg";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../utils/BookService"
import { fetchAuthorById } from "../utils/AuthorService"

export function Book() {
    const { bookID } = useParams();
    console.log("bookID from params:", bookID);
    // bookID = parseInt(bookID, 10)

    const [book, setBook] = useState()

    useEffect(() => {
        loadBookData(bookID);
    }, [bookID])

    const loadBookData = async () => {
        try {
            const result = await fetchBookById(bookID);
            setBook(result)
        } catch (error) {
            alert(error)
        }
    }

    if (!book) {
        return <div>Loading book...</div>;
    }

    return (
        <div className="book-container">
            <div className="book-info-container">
                <img src={default_img} width="60%" height="60%" alt="Default book cover"></img>
                <div className="text-content">
                    <p>Genre: {book.genre}</p>
                    <p>Published year: {book.publishedYear}</p>
                    <p>Pages: {book.pages}</p>
                </div>
            </div>
            <div className="main-book-container">
                <h2 className="plain-heading">{book.title}</h2>
                <h3 className="small-heading">Author: {book.author.name}</h3>
                <p>Description: {book.description}</p>
            </div>
        </div>
    )
}