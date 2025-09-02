
import React from 'react';
import { SunIcon, MoonIcon } from './IconComponents';

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const navLinks = ['About', 'Skills', 'Services', 'Portfolio', 'Contact'];

  return (
    <header className="sticky top-0 z-50 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md shadow-gray-900/5 dark:shadow-black/10">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center py-4">
        <a href="#" className="text-xl font-bold tracking-wider text-gray-900 dark:text-white">
          David Okoye
        </a>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
