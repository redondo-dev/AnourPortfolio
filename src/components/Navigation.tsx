import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "Parcours", href: "/parcours" },
    { label: "Vision", href: "/vision" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-montserrat font-bold text-marseille-blue text-xl">
            AB
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="font-inter text-gray-600 hover:text-marseille-blue transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-0.5 bg-marseille-blue mb-1.5" />
            <div className="w-6 h-0.5 bg-marseille-blue mb-1.5" />
            <div className="w-6 h-0.5 bg-marseille-blue" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block py-2 text-gray-600 hover:text-marseille-blue transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};