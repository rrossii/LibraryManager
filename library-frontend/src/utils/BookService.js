
export const fetchBooks = async () => {
    try {
        const response = await fetch("http://localhost:8080/library/allBooks", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            throw new Error("Cannot fetch books data! " + response)
        }
        console.log("Books loaded")
        return await response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const fetchBookById = async (bookID) => {
    try {
        const response = await fetch(`http://localhost:8080/library/getBook/${bookID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            throw new Error("Cannot fetch book data! " + response)
        }
        
        console.log("Book loaded")
        return await response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const addBook = async (book) => {
    try {
        const response = await fetch('http://localhost:8080/library/addBook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });

        const responseBody = await response.text()
        if (!response.ok) { 
            throw new Error("Cannot add book! " + response)
        }
        if (responseBody !== "New book has been added") { // з беку відповідь (колись зробити нормально через ResponseEntity :))
            throw new Error("Cannot add book! " + responseBody)
        }
        
        return await "Book has been added. " + " Status: " + response.status
        
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const updateBookById = async (book) => {
    try {
        const response = await fetch(`http://localhost:8080/library/updateBook/${book.bookID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(book),
        });

        const responseBody = await response.text()
        if (!response.ok) { 
            throw new Error("Cannot update book! " + response)
        }
        if (responseBody !== "Book has been updated") {
            throw new Error("Cannot update book! " + responseBody)
        }
        
        return await "Book has been updated. " + " Status: " + response.status
        
    } catch (error) {
        console.error(error)
        throw error
    }
}

export const deleteBookById = async (bookID) => {
    try {
        const response = await fetch(`http://localhost:8080/library/deleteBook/${bookID}`, {
            method: 'DELETE'
        })
        const responseBody = await response.text()

        if (!response.ok) {
            throw new Error("Cannot delete a book! " + response)
        }
        if (responseBody !== "Book has been deleted") {
            throw new Error("Cannot delete a book! " + response)
        }

        return await "Book has been deleted. "

    } catch (error) {
        console.error(error)
        throw error
    }
}

export const filterBooksByTitle = async (title) => {
    try {
        console.log("title: " + title)
        const response = await fetch(`http://localhost:8080/library/filterBooksByTitle/${title}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            console.log(response)
            throw new Error("Cannot retrieve filtered books! " + `Response: ${response}`)
        }

        const data = await response.json()

        if (data.length === 0) {
            console.log("No such books!")
            throw new Error("No such books!");
        }

        console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching books:", error);
        throw error;
    }
}