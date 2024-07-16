import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { filterBooksByTitle, filterBooksByAuthor } from "../utils/BookService"
import '../styles.css'

export function Navbar({setFilteredBooks, isMainPage}) {
    const [filter, setFilter] = useState('default')
    console.log("filter: " + filter)

    const handleFilterByTitleButton = async () => {
        try {
            const result = await filterBooksByTitle(filter)
            setFilteredBooks(result)
        } catch (error) {
            alert(error)
        }
    }

    const handleFilterByAuthorButton = async () => {
        try {
            const result = await filterBooksByAuthor(filter)
            setFilteredBooks(result)
        } catch (error) {
            alert(error)
        }
    }


    return (
        <nav className="navbar">
            <div className='navbar-left'>
                <Link to="/" className="app-title">
                    LibMan
                </Link>
                <ul>
                    <li>
                        <Link to="/addBook" className='nav-link'>Add Book</Link>
                    </li>
                    <li>
                        <Link to="/addAuthor" className='nav-link'>Add Author</Link>
                    </li>
                </ul>
            </div>
            {isMainPage && (
                <div className='navbar-right'>
                    <ul>
                        <li>
                            <input
                                type="text"
                                placeholder="Filter by..."
                                onChange={e => setFilter(e.target.value)} />
                        </li>
                        <li>
                            <button onClick={handleFilterByTitleButton}>Filter by title</button>
                        </li>
                        <li>
                            <button onClick={handleFilterByAuthorButton}>Filter by author</button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}