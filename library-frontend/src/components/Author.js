import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchAuthorById, deleteBookById, deleteAuthorById } from "../utils/AuthorService"
import { Navbar } from './Navbar'
import default_author_img from "../resources/default_author.png";

export function Author() {
    const [author, setAuthor] = useState(null)
    const { authorID } = useParams()
    let navigate = useNavigate()

    useEffect(() => {
        loadAuthorData(authorID)
    }, [authorID]);

    const loadAuthorData = async () => {
        try {
            const result = await fetchAuthorById(authorID);
            setAuthor(result)
        } catch (error) {
            alert(error)
        }
    }

    const handleDeleteAuthorButton = async () => {
        try {
            const confirmed = window.confirm("Are you sure you want to delete this author? His/her books will be deleted too. This can't be undone.");
            if (confirmed) {
                const result = await deleteAuthorById(author.authorID)
                alert(result)
                navigate('/')
            }
        } catch (error) {
            alert(error)
        }
    }

    if (!author) {
        return <div>Loading author...</div>;
    }


    return (
        <>
            <Navbar />
            <div className="author-container">
                <div className="author-short-info-container">
                    <img src={default_author_img}
                        style={{ margin: "2rem" }}
                        width="70%" height="80%"
                        alt="Default author image"></img>
                </div>

                <div className="main-author-container">
                    <h2 className="plain-heading">{author.name}</h2>
                    <p>Bio: {author.bio}</p>
                    <div className="book-buttons-container">
                        <button className="delete-button" onClick={handleDeleteAuthorButton}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    )
}