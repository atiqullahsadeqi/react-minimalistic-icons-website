"use client";
import React, { useState, useEffect } from "react";

const Menu = () => {
  const [showToast, setShowToast] = useState(false);
  const [version, setVersion] = useState("1.1.2");

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
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500/20 backdrop-blur-md text-green-800 px-6 py-3 rounded-lg border border-green-500/30 shadow-lg animate-bounce">
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
              <span className="font-semibold text-gray-900 text-sm sm:text-base">
                React Minimalistic Icons
              </span>
            </div>
            <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 border border-gray-200 rounded-md">
              v{version}
            </span>
          </div>
          <div className="flex justify-end">
            <button
              onClick={copyUrl}
              className="text-sm font-semibold text-gray-900 hover:text-blue-600 cursor-pointer"
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
