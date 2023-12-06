'use client'

import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchComponent = () => {
  // const [searchTerm, setSearchTerm] = useState<string>("");

  // const handleSearchInput = (event) => {
  //   setSearchTerm(event.target.value);
  //   // Handle search input as needed
  //   console.log("Search input:", event.target.value);
  // };

  return (
    <div className="flex items-center gap-2 text-gray-400 justify-end">
      <input
        type="search"
        name="search"
        placeholder="Search"
        className="bg-transparent h-8 px-5 pr-10 rounded-full text-sm focus:outline-none transition-all duration-300 focus:ring focus:border-gray-300"
        // onChange={handleSearchInput}
        // value={searchTerm}
      />
      <FaSearch className="text-gray-400 h-6 w-5 fill-current transition-all duration-300 transform hover:scale-110" />
    </div>
  );
};


export default SearchComponent;
