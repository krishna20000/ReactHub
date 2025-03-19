import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href="https://portfolio-kdm.vercel.app/">
            <img src="https://i.postimg.cc/kgv6sbbF/circle-transparent.png" alt="logo" className="w-10 h-10" />
          </a>
          <h1 className="text-2xl font-bold text-blue-400">ReactHub</h1>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/counter" className="hover:text-blue-400 transition duration-300">Counter</Link></li>
          <li><Link to="/password-generator" className="hover:text-blue-400 transition duration-300">Password Generator</Link></li>
          <li><Link to="/background-changer" className="hover:text-blue-400 transition duration-300">Background Changer</Link></li>
          <li><Link to="/currency-converter" className="hover:text-blue-400 transition duration-300">Currency Converter</Link></li>
          <li><Link to="/github-search" className="hover:text-blue-400 transition duration-300">
            <i className="fa-brands fa-github"></i><span className="ml-2">Search</span>
          </Link></li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-center mt-2 p-4 space-y-4">
          <li><Link to="/counter" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Counter</Link></li>
          <li><Link to="/password-generator" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Password Generator</Link></li>
          <li><Link to="/background-changer" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Background Changer</Link></li>
          <li><Link to="/currency-converter" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Currency Converter</Link></li>
          <li><Link to="/github-search" className="block hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>
            <i className="fa-brands fa-github"></i><span className="ml-2">Search</span>
          </Link></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
