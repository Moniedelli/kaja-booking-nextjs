'use client'

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/admin/customer/search?query=${query}`);
      onSearch(response.data);
    } catch (error) {
      console.error('Error searching data:', error);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2 text-gray-400 justify-end pb-1 mr-10">
        <input
          type="search"
          name="search"
          placeholder="by id, name, or email..."
          className="bg-transparent h-8 px-5 rounded-full text-xs focus:outline-none transition-all duration-300 focus:ring focus:border-gray-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>
          <FaSearch className="text-gray-400 h-6 w-5 fill-current transition-all duration-300 transform hover:scale-110" />
        </button>
      </div>
    </>
  );
};


export default SearchComponent;
