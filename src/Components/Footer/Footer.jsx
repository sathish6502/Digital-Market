import { FaLinkedin, FaDribbble, FaGithub } from "react-icons/fa";
import FootericonImg from "../../assets/Footer/footericon.png"
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Logo + Description */}
          <div>
            <h2 className="text-white text-xl font-semibold flex items-center gap-2">
             <img 
    src={FootericonImg} 
    alt="logo" 
    className="w-8 h-8 object-contain"
  />
              GraphikKrafts
            </h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Modern digital design agency creating pixel-perfect experiences
              for innovative brands.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold">Services</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">UI/UX Design</li>
              <li className="hover:text-white cursor-pointer">Website Design</li>
              <li className="hover:text-white cursor-pointer">Mobile App Design</li>
              <li className="hover:text-white cursor-pointer">Branding & Identity</li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold">Company</h3>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Our Process</li>
              <li className="hover:text-white cursor-pointer">Portfolio</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-5">
            <h3 className="text-white font-semibold">Connect</h3>

            <div className="flex gap-4">
              <div className="p-2 bg-gray-700 rounded-lg hover:bg-[#D26622]">
                <FaLinkedin />
              </div>
              <div className="p-2 bg-gray-700 rounded-lg hover:bg-[#D26622]">
                <FaDribbble />
              </div>
              <div className="p-2 bg-gray-700 rounded-lg hover:bg-[#D26622]">
                <FaGithub />
              </div>
            </div>

            <p className="text-sm text-gray-400 hover:text-white cursor-pointer">
              Get in Touch →
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          
          <p>© 2025 GraphikKrafts. All rights reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;