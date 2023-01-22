import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>Copyright © {new Date().getFullYear()} Your Company</p>
        <div className="flex">
          <a href="#" className="mx-3 text-gray-500">Privacy Policy</a>
          <a href="#" className="mx-3 text-gray-500">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
