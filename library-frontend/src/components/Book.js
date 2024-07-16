import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import { fetchBookById, deleteBookById } from "../utils/BookService"
import { Navbar } from './Navbar'
import default_img from "../resources/book-cover-default.png";

export function Book() {
    const { bookID } = useParams();
    console.log("bookID from params:", bookID);

    let navigate = useNavigate();
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

    const handleUpdateBookButton = async () => {
        navigate(`/updateBook/${bookID}`)
    }

    const handleDeleteBookButton = async () => {
        try {
            const confirmed = window.confirm("Are you sure you want to delete this book? This can't be undone.");
            if (confirmed) {
                const result = await deleteBookById(book.bookID)
                alert(result)
                navigate('/')
            }
        } catch (error) {
            alert(error)
        }
    }

    if (!book) {
        return (
            <>
            <Navbar />
            <div>Loading book...</div>;
        </>
        )
    }

    return (
        <>
            <Navbar />
            <div className="book-container">
                <div className="book-info-container">
                    <img src={default_img}
                        style={{ margin: "2rem" }}
                        width="70%" height="70%"
                        alt="Default book cover"></img>
                    <div className="text-content">
                        <p>Genre: {book.genre}</p>
                        <p>Published year: {book.publishedYear}</p>
                        <p>Pages: {book.pages}</p>
                    </div>
                </div>

                <div className="main-book-container">
                    <h2 className="plain-heading">{book.title}</h2>
                    <h3 className="small-heading">
                        Author:
                        <Link to={`/author/${book.author.authorID}`} className="link-no-style">{book.author.name}</Link>
                    </h3>
                    <p>Description: {book.description}</p>
                    <div className="book-buttons-container">
                        <button className="default-button" onClick={handleUpdateBookButton}>Update</button>
                        <button className="delete-button" onClick={handleDeleteBookButton}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}