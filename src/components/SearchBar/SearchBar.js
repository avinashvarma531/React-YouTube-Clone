import React, { useState } from 'react';
import logo from './logo.png';
import './SearchBar.css'

function SearchBar({ setSearchTerm }) {
    const [term, setTerm] = useState("");

    const onFormSubmit = event => {
        event.preventDefault();
        setSearchTerm(term);
    }

    return (
        <div className="navbar">
            <div className="logo">
                <a href="https://youtube.com" target="_blank" rel="noreferrer"><img src={logo} alt="yt-logo" /></a>
            </div>
            <form onSubmit={onFormSubmit} className="searchForm">
                <input
                    type="text"
                    placeholder="Search"
                    value={ term }
                    onChange={ (event) => setTerm(event.target.value) }
                />
                <button type="submit" className="ui icon button">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    );
}

export default SearchBar;