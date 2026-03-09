import React from 'react';
import { 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF, 
  FaRegEnvelope 
} from "react-icons/fa";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import FooterLogo from '../../assets/image/footerlogo.png'

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] pt-20">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
               <img src={FooterLogo} alt="" />
            </div>
            
            <h2 className="font-primary text-[50px]  font-bold w-85 md:w-123 text-heading leading-15">
              Get Ready <span className='font-light'>To Create Great</span>
            </h2>

            <div className="relative max-w-sm pt-4">
              <input 
                type="email" 
                placeholder="Email Adress" 
                className="w-full bg-transparent border-b border-gray-300 py-3 font-inter focus:outline-none focus:border-primary transition-colors"
              />
              <FaRegEnvelope className="absolute right-0 top-1/2 -translate-y-1/2 text-heading w-5 h-5" />
            </div>
          </div>

          <div className="md:col-span-3 md:ml-auto">
            <h3 className="font-primary text-xl font-bold text-heading mb-8">Quick Link</h3>
            <ul className="space-y-4 font-inter text-para text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">About Me</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog Post</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 md:ml-auto">
            <h3 className="font-primary text-xl font-bold text-heading mb-8">Contact</h3>
            <div className="space-y-6 font-inter text-para text-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-heading">
                  <FiMail size={18} />
                </div>
                <span>nafiz125@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-heading">
                  <FiMapPin size={18} />
                </div>
                <span>3891 Ranchview Dr. Richardson</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-heading">
                  <FiPhone size={18} />
                </div>
                <span>01245789321</span>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              {[
                { Icon: FaInstagram, href: "#" },
                { Icon: FaLinkedinIn, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaFacebookF, href: "#" }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  className="w-10 h-10 rounded-full bg-[#E8E8E8] flex items-center justify-center text-heading hover:bg-primary hover:text-white transition-all active:scale-90"
                >
                  <social.Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] font-inter text-para">
          <p>© InversWeb 2026 | All Rights Reserved</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Trams & Condition</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;