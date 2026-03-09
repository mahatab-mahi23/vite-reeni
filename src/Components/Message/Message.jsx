import React, { useState } from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';
import ContactSidebar from './ContactSidebar';

const Message = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app-container">
      {!isOpen && (
        <button className="middle-right-btn rounded-full " onClick={() => setIsOpen(true)}>
          <FaFacebookMessenger size={24} />
        </button>
      )}

      {isOpen && (
        <ContactSidebar onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default Message;