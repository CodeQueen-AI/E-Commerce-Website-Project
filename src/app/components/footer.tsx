import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-pink-700 via-pink-400 to-pink-700 text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-3xl mb-4 font-serif">Designed by Sumbal Naz ✏️</p>
        <div className="flex justify-center space-x-6 mb-4">
          <Link
            href="https://github.com/CodeQueen-AI" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-black p-3 rounded-full hover:bg-black hover:text-white transition-all duration-300"
          >
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sumbal-naz-601411323/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-blue-600 text-white p-3 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
        <div className="border-t border-gray-600 pt-4">
          <p>© 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
