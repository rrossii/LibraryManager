import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom";
import { fetchBookById, updateBookById } from "../utils/BookService"
import { handleInputChange } from '../utils/formUtils'
import { Navbar } from './Navbar'

export function UpdateBook() {
    let navigate = useNavigate()
    const { bookID } = useParams();

    const [book, setBook] = useState({
        title: '',
        genre: '',
        description: '',
        publishedYear: 0,
        pages: 0,
        author: {
            name: '',
            bio: 'Some biography',
        },
    })

    useEffect(() => {
        const loadBookData = async () => {
            try {
                const result = await fetchBookById(bookID);
                setBook(result)
            } catch (error) {
                alert(error)
            }
        };
        loadBookData();
    }, [bookID])

    const handleBookChange = handleInputChange(setBook)

    const handleSubmitButton = async (event) => {
        event.preventDefault()
        try {
            const result = await updateBookById(book)

            console.log(result)
            alert(result)
            let path = `/book/${book.bookID}`
            navigate(path)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className="form-container">
                <h2 className="plain-heading">Update a book</h2>
                <form className="classic-form" onSubmit={handleSubmitButton}>
                    <label for="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={book.title}
                        required
                        onChange={handleBookChange}
                    /><br></br>

                    <label for="author">Author's name:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={book.author.name}
                        required
                        onChange={e => setBook(prevBook => ({
                            ...prevBook,
                            author: {
                                ...prevBook.author,
                                name: e.target.value
                            }
                        }))}
                    /><br></br>

                    <label for="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={book.genre}
                        required
                        onChange={handleBookChange}
                    /><br></br>

                    <label for="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={book.description}
                        required
                        onChange={handleBookChange}
                    /><br></br>

                    <label for="year">Published year:</label>
                    <input
                        type="number"
                        id="publishedYear"
                        name="publishedYear"
                        min="0" max="2026"
                        value={book.publishedYear}
                        required
                        onChange={handleBookChange}
                    /><br></br>

                    <label for="pages">Pages:</label>
                    <input
                        type="number"
                        id="pages"
                        name="pages"
                        min="0"
                        value={book.pages}
                        required
                        onChange={handleBookChange}
                    /><br></br>

                    <input
                        type="submit"
                        value="Update">
                    </input>
                </form>
            </div>
        </>
    )
}