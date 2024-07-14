import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addBook } from "../utils/BookService"

export function AddBook() {
    let navigate = useNavigate();

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
    });

    const handleBookChange = (event) => {
        const { name, value } = event.target
        setBook((prevBook) => ({
            ...prevBook,
            [name]: value,
        }))
    }

    const handleAuthorChange = (event) => {
        const { name, value } = event.target
        setBook((prevBook) => ({
            ...prevBook,
            author: {
                ...prevBook.author,
                [name]: value,
            },
        }))
    }

    const handleSubmitButton = async (event) => {
        event.preventDefault()
        try {
            const result = await addBook(book)
            alert(result)
            let path = "/"
            navigate(path)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="form-container">
            <h2 className="plain-heading">Add a book</h2>
            <form className="classic-form" onSubmit={handleSubmitButton}>
                <label for="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    required 
                    onChange={handleBookChange}
                /><br></br>

                <label for="author">Author's name:</label>
                <input
                    type="text"
                    id="author"
                    name="author"
                    required 
                    onChange={handleAuthorChange}
                /><br></br>

                <label for="genre">Genre:</label>
                <input
                    type="text"
                    id="genre"
                    name="genre" 
                    required
                    onChange={handleBookChange}
                /><br></br>

                <label for="description">Description:</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    required 
                    onChange={handleBookChange}
                /><br></br>

                <label for="year">Published year:</label>
                <input
                    type="number"
                    id="year"
                    name="year"
                    min="0" max="2026"
                    required 
                    onChange={handleBookChange}
                /><br></br>

                <label for="pages">Pages:</label>
                <input
                    type="number"
                    id="pages"
                    name="pages"
                    min="0"
                    required 
                    onChange={handleBookChange}
                /><br></br>

                <input
                    type="submit"
                    value="Add">
                </input>
            </form>
        </div>
    )
}