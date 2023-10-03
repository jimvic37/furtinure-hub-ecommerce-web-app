import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Perform the search based on the searchQuery
    if (searchQuery.trim() !== '') {
      // Call the onSearch callback with the searchQuery as an argument
      onSearch(searchQuery);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for furniture"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
