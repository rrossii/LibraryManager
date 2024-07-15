export const fetchAuthors = async () => {
    try {
        const response = await fetch("http://localhost:8080/library/allAuthors", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            throw new Error("Cannot fetch authors data! " + "Response: " + response.status)
        }
        console.log("Authors loaded")
        return await response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const fetchAuthorById = async (authorID) => {
    try {
        const response = await fetch(`http://localhost:8080/library/getAuthor/${authorID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            throw new Error("Cannot fetch author's data! " + response)
        }
        
        console.log("Author loaded")
        return await response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const addAuthor = async (author) => {
    try {
        const response = await fetch('http://localhost:8080/library/addAuthor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(author),
        });

        const responseBody = await response.text()
        if (!response.ok) {
            throw new Error("Cannot add an author! " + response)
        }
        if (responseBody !== "New author has been added") { 
            throw new Error("Cannot add an author! " + responseBody)
        }
        
        return await "Author has been added. " + " Status: " + response.status
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const deleteAuthorById = async (authorID) => {
    try {
        const response = await fetch(`http://localhost:8080/library/deleteAuthor/${authorID}`, {
            method: 'DELETE'
        })
        const responseBody = await response.text()

        if (!response.ok) {
            throw new Error("Cannot delete an author! " + response)
        }
        if (responseBody !== "Author has been deleted") {
            throw new Error("Cannot delete an author! " + response)
        }

        return await "Author has been deleted. "

    } catch (error) {
        console.error(error)
        throw error
    }
}