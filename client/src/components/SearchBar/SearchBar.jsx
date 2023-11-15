import React, { useState } from 'react';
import axios from 'axios';
import './searchBar.css';

const SearchBar = ({setAlbums}) => {
    const [query, setQuery] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        try {
            if (query === '') return;
            const response = await axios.get(`http://localhost:5051/api/artist/search`, {params: {artistName: query}});
            setAlbums(response.data);
        } catch (error) {
            console.error('Error during the search:', error);
        }
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
