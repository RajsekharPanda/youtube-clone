
import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim() !== '') {
      console.log('Searching for:', searchQuery);
      // You can replace this console.log with routing or API call logic
    }
  };

  return (
    <div className="flex items-center justify-center w-full max-w-3xl mx-auto p-1">
      <form onSubmit={handleSearch} className="flex w-full">
        <input
          type="text"
          className="text-white w-full p-3 bg-[#121212] border border-gray-300 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="flex items-center justify-center p-3 bg-[#222222] border-l-0 border border-gray-300 rounded-r-full hover:bg-gray-200"
        >
          <FiSearch className="text-gray-300" size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
