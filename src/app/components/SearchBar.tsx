import React, { memo } from "react";
import { SearchNormalLinear } from "react-minimalistic-icons";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const SearchBar = memo(({ searchQuery, onSearchChange }: SearchBarProps) => {
  return (
    <div className="w-full bg-background h-20 items-center flex justify-center border-y-1 border-muted   transition-colors">
      <div className="w-6xl flex items-center gap-4 pl-4">
        <SearchNormalLinear
          size={20}
          color="currentColor"
          className="text-muted-foreground"
        />
        <input
          type="text"
          placeholder="Search for an icon..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full py-5 focus:outline-none focus:border-none bg-transparent text-muted-foreground placeholder-muted-foreground "
        />
      </div>
    </div>
  );
});

SearchBar.displayName = "SearchBar";

export default SearchBar;
