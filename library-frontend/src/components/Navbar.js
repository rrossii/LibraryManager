import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'

export function Navbar() {
    return (
        <nav className="navbar">
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
        </nav>
    )
}