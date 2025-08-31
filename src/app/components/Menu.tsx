"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const Menu = () => {
  const [showToast, setShowToast] = useState(false);
  const [version, setVersion] = useState("1.1.8");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Get version from package.json dependencies
    const getVersion = async () => {
      try {
        const response = await fetch("/api/version");
        if (response.ok) {
          const data = await response.json();
          setVersion(data.version);
        }
      } catch {
        // Fallback to checking package.json in dependencies
        setVersion("1.1.2");
      }
    };
    getVersion();
  }, []);

  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div>
      {showToast && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500/20 backdrop-blur-md text-green-800 dark:text-green-200 px-6 py-3 rounded-lg border border-green-500/30 shadow-lg animate-bounce">
          URL copied to clipboard!
        </div>
      )}

      <header className="absolute inset-x-0 top-0 z-50 flex justify-center">
        <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8 w-full max-w-7xl">
          <div className="flex flex-1 items-center gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xs sm:text-sm">
                  RM
                </span>
              </div>
              <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                React Minimalistic Icons
              </span>
            </div>
            <span className="px-2 py-1 text-xs font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md">
              v{version}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )}
            </button>
            <button
              onClick={copyUrl}
              className="text-sm font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
            >
              Share
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Menu;
