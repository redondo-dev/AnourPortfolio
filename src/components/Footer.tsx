import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-white/90 backdrop-blur-sm py-6 mt-auto border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center space-x-8">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-marseille-blue hover:text-marseille-navy transition-colors duration-300 transform hover:scale-110"
          >
            <Facebook strokeWidth={1.5} size={28} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-marseille-blue hover:text-marseille-navy transition-colors duration-300 transform hover:scale-110"
          >
            <Instagram strokeWidth={1.5} size={28} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-marseille-blue hover:text-marseille-navy transition-colors duration-300 transform hover:scale-110"
          >
            <Linkedin strokeWidth={1.5} size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};