import React from 'react';
import { useNavigate } from 'react-router-dom';

export function FilteredBooks ({ books }) {
    let navigate = useNavigate();

    const handleBookClick = (book) => {
        const bookID = book.bookID;
        let path = `/book/${bookID}`
        navigate(path);
    };

    return (
        <div className="book-grid">
            {books.map((book) => (
                <div className="book-item" key={book.bookID} onClick={() => handleBookClick(book)}>
                    <h3>{book.title}</h3>
                    <p>Author: {book.author.name}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Published year: {book.publishedYear}</p>
                    <p>Pages: {book.pages}</p>
                </div>
            ))}
        </div>
    );
};
