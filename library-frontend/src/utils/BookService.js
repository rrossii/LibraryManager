export const fetchBooks = async () => {
    try {
        const response = await fetch("http://localhost:8080/library/allBooks", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        if (!response.ok) {
            throw new Error("Cannot fetch books data!" + "Response: " + response.status)
        }
        console.log("Book has been added")
        return await response.json()
    } catch (error) {
        console.log(error)
        throw error
    }
}