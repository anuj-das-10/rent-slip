import { FaGithub, FaEnvelope } from 'react-icons/fa';  // Importing icons from react-icons
import { FaXTwitter } from 'react-icons/fa6'
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
          <p>Developed by <strong>Anuj Das</strong> <span className="text-teal-400 font-bold">( ADx )</span></p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end space-x-4 mt-4">
            <a href="https://x.com/geeky_adx" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaXTwitter className="text-2xl hover:text-teal-400 transition-colors duration-300" />
            </a>
            <a href="https://www.github.com/anuj-das-10" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaGithub className="text-2xl hover:text-teal-400 transition-colors duration-300" />
            </a>
            <a href="mailto:anujdas.business@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email">
              <FaEnvelope className="text-2xl hover:text-teal-400 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-6 text-sm md:text-lg border-t border-gray-700 pt-4">
        <p>Copyright &copy; {new Date().getFullYear()} RentSlip. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
