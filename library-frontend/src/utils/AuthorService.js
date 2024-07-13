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