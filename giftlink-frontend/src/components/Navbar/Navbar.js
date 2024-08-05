import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">GiftLink</a>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/home.html">Home</a> {/* Ensure this is a valid link or update it */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/app">Gifts</Link> {/* Updated Link */}
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/app/search">Search</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
