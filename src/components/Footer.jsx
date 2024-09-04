import Link from "next/link";
import { FaTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa';  // Importing icons from react-icons
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center space-y-6 md:space-y-0">
        
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Developer Info */}
        <div className="text-center md:text-right">
          <p>Developed by Anuj Das</p>
          <p className="text-teal-400">GeekyADx</p>
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4 mt-4">
            <a href="https://twitter.com/your_twitter_handle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-xl hover:text-teal-400 transition-colors duration-300" />
            </a>
            <a href="https://youtube.com/your_youtube_channel" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube className="text-xl hover:text-teal-400 transition-colors duration-300" />
            </a>
            <a href="mailto:your_email@example.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope className="text-xl hover:text-teal-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm border-t border-gray-700 pt-4">
        <p>© {new Date().getFullYear()} Rentify. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
