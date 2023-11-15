import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (event) => {
        event.preventDefault();
        console.log('Buscando:', query);
    };

    return (
        <div className="search-container">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for Artists, Songs, or Albums"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
