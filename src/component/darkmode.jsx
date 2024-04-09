import React, { useState } from 'react';


function DarkModeToggle() {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(prevMode => !prevMode);
      if (!darkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
      }
    };
  
    return (
        <div>
            <p className="toggle-text">
                {darkMode ? 'Light Mode' : 'Dark Mode'}
            </p>
            <label className={`switch ${darkMode ? 'dark-text' : 'light-text'}`}>
                <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
                <span className="slider round"></span>
            </label>
        </div>
    );
  }
  
  export default DarkModeToggle;