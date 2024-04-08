import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Button, TextInput } from 'flowbite-react';
import { AiOutlineSearch } from 'react-icons/ai';
import { HiMenu, HiX, HiArrowLeft } from 'react-icons/hi'; // Include HiArrowLeft for the back icon

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuRef]);

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log("Search Term:", searchTerm);
  };

  return (
    <Navbar className="border-b-2">
      <div className="flex justify-between items-center w-full px-4 lg:px-8">
        <Link to="/" className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white flex-shrink-0">
          <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
            Camden's
          </span>
          Blog
        </Link>

        {/* Central Navigation Links for Large Screens */}
        <div className="hidden lg:flex items-center justify-center flex-grow">
          <Link to="/about" className="text-lg text-gray-800 hover:text-gray-600 px-4">About</Link>
          <Link to="/contact" className="text-lg text-gray-800 hover:text-gray-600 px-4">Contact</Link>
          {/* Additional Links can be added here */}
        </div>

        {/* Right Section: Conditional Search Input for Smaller Screens */}
        <div className="flex items-center justify-end flex-grow lg:flex-grow-0">
          {isSearchVisible && (
            <form onSubmit={handleSubmit} className="transition-all duration-500 ease-in-out lg:flex">
              <TextInput
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          )}

          {/* Icons for Smaller Screens */}
          <div className="lg:hidden flex items-center flex-grow justify-end">
            <Button aria-label="Search" onClick={toggleSearch} className="w-12 h-10" color="gray" pill>
              <AiOutlineSearch className="text-gray-800" size={20} />
            </Button>
            <Button aria-label="Toggle Menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} color="gray" pill className="ml-2">
              {isMobileMenuOpen ? <HiX className="text-gray-800" size={24} /> : <HiMenu className="text-gray-800" size={24} />}
            </Button>
          </div>
        </div>

        {/* Overlay Navigation Menu for Smaller Screens */}
        <div ref={menuRef} className={`${isMobileMenuOpen ? 'flex' : 'hidden'} fixed inset-0 bg-white/75 backdrop-blur-md z-20 lg:hidden`}>
          <div className="flex flex-col p-5">
            {/* Back Button */}
            <Button aria-label="Close Menu" onClick={() => setIsMobileMenuOpen(false)} className="mb-4">
              <HiArrowLeft className="text-gray-800" size={24} /> Back
            </Button>
            <Link to="/about" className="text-lg text-gray-800 hover:text-gray-600 py-2">About</Link>
            <Link to="/contact" className="text-lg text-gray-800 hover:text-gray-600 py-2">Contact</Link>
            {/* Additional Links */}
          </div>
        </div>
      </div>
    </Navbar>
  );
}
