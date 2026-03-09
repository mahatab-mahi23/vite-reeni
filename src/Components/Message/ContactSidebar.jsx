import React from 'react';
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaFacebookF,
  FaTimes 
} from 'react-icons/fa';
import Logo2 from '../../assets/image/logo2.png'
import Logo3 from '../../assets/image/personal-logo.png'

const ContactSidebar = ({ onClose }) => {
  return (
    <div className=" fixed sidebar-popup font-inter w-[90%] sm:max-w-87.5 bg-white rounded-xl p-8 shadow-box max-h-[90vh] overflow-y-auto">
     <div className='flex justify-between items-center'>
       <img src={Logo2} alt="" />
      <button 
        className="close-icon text-para rounded-full hover:text-primary transition-colors text-xl p-2"
        onClick={onClose} 
      >
        <FaTimes />
      </button>

     </div>

      <div className="mt-4">
        <img src={Logo3} alt="" className='m-7.5 mx-auto ' />
        <h2 className="font-primary text-heading text-[28px] leading-[1.2] font-bold mb-6">
          Freelancer delivering exceptional Webflow, and Next.js solutions.
        </h2>
        
        <p className="font-inter text-para text-[15px] leading-relaxed mb-8">
          I am a skilled freelancer specializing in Webflow development, 
          Figma design, and Next.js projects. I deliver creative, dynamic, 
          and user-centric web solutions.
        </p>

        <div className="space-y-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg text-heading text-lg">
              <FaPhoneAlt />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-primary tracking-widest uppercase mb-1">
                Call Now
              </span>
              <p className="text-heading font-semibold text-[16px]">+92 (8800) - 98670</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg text-heading text-lg">
              <FaEnvelope />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-primary tracking-widest uppercase mb-1">
                Mail Us
              </span>
              <p className="text-heading font-semibold text-[16px]">example@info.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg text-heading text-lg">
              <FaMapMarkerAlt />
            </div>
            <div>
              <span className="block text-[11px] font-bold text-primary tracking-widest uppercase mb-1">
                My Address
              </span>
              <p className="text-heading font-semibold text-[16px]">66 BROKLYANT, NEW YORK 3269</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-primary text-heading font-bold text-[14px] tracking-widest mb-4 uppercase">
            Find With Me
          </h4>
          <div className="flex gap-3">
            {[ 
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedinIn />, link: "#" },
              { icon: <FaTwitter />, link: "#" },
              { icon: <FaFacebookF />, link: "#" }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.link}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-heading hover:bg-primary hover:text-white transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSidebar;