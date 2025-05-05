
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./ui-custom/Button";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/features" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="border-b border-gray-100 bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-blue-600">
          ComponentCraft
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-3">
            <Button variant="outline" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-6 border-t border-gray-100 bg-white">
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block text-gray-600 hover:text-blue-600 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col space-y-3 mt-5">
            <Button variant="outline" fullWidth>
              Log in
            </Button>
            <Button fullWidth>Sign up</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
