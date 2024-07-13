export function AddBook() {
    return (
        <div className="form-container">
            <h2 className="plain-heading">Add a book</h2>
            <form className="classic-form">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" required /><br></br>
                <label for="author">Author's name:</label>
                <input type="text" id="author" name="author" required /><br></br>
                <label for="genre">Genre:</label>
                <input type="text" id="genre" name="genre" required /><br></br>
                <label for="description">Description:</label>
                <input type="text" id="description" name="description" required /><br></br>
                <label for="year">Published year:</label>
                <input type="number" id="year" name="year" min ="0" max="2026" required /><br></br> 
                <label for="pages">Pages:</label>
                <input type="number" id="pages" name="pages" min ="0" required /><br></br> 

                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}