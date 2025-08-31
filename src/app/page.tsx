"use client";
import { useState, useMemo, useCallback } from "react";
import {
  getAllIcons,
  searchIcons,
  filterByVariant,
  variants,
} from "@/lib/icons";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Variants from "./components/Variants";
import Icons from "./components/Icons";
import Footer from "./components/Footer";

export default function Home() {
  const [selectedVariant, setSelectedVariant] = useState("Linear");
  const [searchQuery, setSearchQuery] = useState("");
  const [displayCount, setDisplayCount] = useState(50);
  const [isLoading, setIsLoading] = useState(true);

  const allIcons = useMemo(() => {
    const icons = getAllIcons();
    setIsLoading(false);
    return icons;
  }, []);

  const filteredIcons = useMemo(() => {
    if (isLoading) return [];
    let icons = allIcons;
    icons = filterByVariant(icons, selectedVariant);
    icons = searchIcons(icons, searchQuery);
    return icons;
  }, [allIcons, selectedVariant, searchQuery, isLoading]);

  const displayedIcons = useMemo(() => {
    return filteredIcons.slice(0, displayCount);
  }, [filteredIcons, displayCount]);

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
    setDisplayCount(50);
  }, []);

  const handleVariantChange = useCallback((variant: string) => {
    setSelectedVariant(variant);
    setDisplayCount(50);
  }, []);

  const loadMore = useCallback(() => {
    setDisplayCount((prev) => prev + 50);
  }, []);

  const hasMore = displayedIcons.length < filteredIcons.length;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading icons...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Hero />
      <div className="sticky top-0 z-40 bg-background mb-20 transition-colors">
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
        <div className="w-full flex justify-center py-6 sm:py-10 px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 max-w-md sm:max-w-2xl">
            {variants?.map((variant) => (
              <Variants
                key={variant}
                variant={variant}
                selectedVariant={selectedVariant}
                onSelect={handleVariantChange}
              />
            ))}
          </div>
        </div>
      </div>

      <Icons icons={displayedIcons} />

      {hasMore && (
        <div className="w-full flex justify-center py-8">
          <button
            onClick={loadMore}
            className="cursor-pointer px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
          >
            Load More ({filteredIcons.length - displayedIcons.length} remaining)
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}
