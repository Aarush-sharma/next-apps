"use client";

// pages/index.tsx

import { useState } from "react";


const IndexPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement dark mode logic here, like toggling CSS classes or switching themes
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      

      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-lg">Health Assistant</div>
          <div>
            <button className="text-white" onClick={toggleDarkMode}>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Health Assistant</h1>
        <p className="text-lg mb-4">
          Your personalized guide to understanding symptoms and finding basic
          medication.
        </p>
        <p className="text-lg mb-4">
          Empowering you to take control of your health.
        </p>

        <div className="flex space-x-4">
          <a
            href="/sign-up"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Sign Up
          </a>

          <a
            href="/sign-in"
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
          >
            Sign In
          </a>
        </div>
      </main>
    </div>
  );
};

export default IndexPage;
