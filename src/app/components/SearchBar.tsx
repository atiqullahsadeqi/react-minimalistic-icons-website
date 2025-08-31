import React, { memo } from "react";
import { SearchNormalLinear } from "react-minimalistic-icons";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar = memo(({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 h-20 items-center flex justify-center border-y-1 border-indigo-100 dark:border-gray-700 transition-colors">
      <div className="w-6xl flex items-center gap-4">
        <SearchNormalLinear size={20} color="currentColor" className="text-gray-600 dark:text-gray-400" />
        <input
          type="text"
          placeholder="Search for an icon..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full py-5 focus:outline-none focus:border-none bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>
    </div>
  );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;
