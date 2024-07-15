export const handleInputChange = (setState) => (event) => {
    const { name, value } = event.target
    setState((prevState) => ({
        ...prevState,
        [name]: value,
    }))
}
