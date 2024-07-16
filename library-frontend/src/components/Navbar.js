import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import { filterBooksByTitle, filterBooksByAuthor, exportBookToCsv } from "../utils/BookService"
import '../styles.css'

export function Navbar({setFilteredBooks, isMainPage}) {
    let navigate = useNavigate();

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

    const handleExportButtonClick = async () => {
        try {
            const result = await exportBookToCsv()
            console.log(result)
        } catch (error) {
            alert(error)
        }
    }

    const handleAppTitleClick = () => {
        navigate('/')
        window.location.reload()
    };


    return (
        <nav className="navbar">
            <div className='navbar-left'>
                <Link to="/" className="app-title" onClick={handleAppTitleClick}>
                    LibMan
                </Link>
                <ul>
                    <li>
                        <Link to="/addBook" className='nav-link'>Add Book</Link>
                    </li>
                    <li>
                        <Link to="/addAuthor" className='nav-link'>Add Author</Link>
                    </li>
                    <li>
                        <Link className='nav-link' onClick={handleExportButtonClick}>Export books</Link>
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