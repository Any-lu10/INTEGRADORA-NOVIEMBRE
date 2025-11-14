import React from 'react';
import { useTheme } from '../../context/ThemeContext';

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button 
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
}

export default DarkModeToggle;