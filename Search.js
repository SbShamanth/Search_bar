import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making HTTP requests

function Search() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/data?search=${searchQuery}`);
            setSearchResults(response.data);
            navigate('/display'); // Navigate to the display page after fetching the data
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <h>Search the data which you want to fetch it from json server</h>
            <br />
            <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="search-icon" />
            <div>
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default Search;
