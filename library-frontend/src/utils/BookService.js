
export const fetchBooks = async () => {
    try {
        const response = await fetch("http://localhost:8080/library/allBooks", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            throw new Error("Cannot fetch books data! " + "Response: " + response.status)
        }
        console.log("Books loaded")
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