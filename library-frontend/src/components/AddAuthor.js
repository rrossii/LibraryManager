import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addAuthor } from "../utils/AuthorService"
import { Navbar } from './Navbar';

export function AddAuthor() {
    let navigate = useNavigate()

    const [author, setAuthor] = useState({
        name: '',
        bio: ''
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setAuthor((prevAuthor) => ({
            ...prevAuthor,
            [name]: value,
        }))
    }

    const handleSubmitButton = async (event) => {
        event.preventDefault()
        try {
            const result = await addAuthor(author)
            alert(result)
            let path = "/"
            navigate(path)
        } catch (error) {
            alert(error)
        }
    }

    return (
        <>
            <Navbar />
            <div className="form-container">
            <h2 className="plain-heading">Add an author</h2>
            <form className="classic-form" onSubmit={handleSubmitButton}>
                <label for="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    required
                /><br></br>

                <label for="bio">Bio:</label>
                <input
                    type="text"
                    id="bio" name="bio"
                    onChange={handleChange}
                    required
                /><br></br>

                <input type="submit" value="Add"></input>
            </form>
        </div>
        </>
        
    )
}