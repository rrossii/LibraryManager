export function AddAuthor() {
    return (
        <div className="form-container">
            <h2 className="plain-heading">Add an author</h2>
            <form className="classic-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required /><br></br>
                <label for="bio">Bio:</label>
                <input type="text" id="bio" name="bio" required /><br></br>

                <input type="submit" value="Add"></input>
            </form>
        </div>
    )
}