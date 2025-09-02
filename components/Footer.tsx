
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 md:px-12 text-center text-gray-500 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} David Okoye. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
