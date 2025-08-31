import React, { memo } from "react";
import { SearchNormalLinear } from "react-minimalistic-icons";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar = memo(({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className=" w-full bg-white h-20  items-center flex justify-center border-y-1 border-indigo-100">
      <div className="w-6xl flex items-center gap-4">
        <SearchNormalLinear size={20} />
        <input
          type="text"
          placeholder="Search for an icon..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full py-5 focus:outline-none focus:border-none"
        />
      </div>
    </div>
  );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;
