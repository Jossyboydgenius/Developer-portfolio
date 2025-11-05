import React from 'react';
import './SocialHandles.css';
import { socialHandles } from '@/data/sources';

const SocialHandles: React.FC = () => {
  return (
    <div className="handles-container">
      {socialHandles.map((handle, index) => (
        <a
          href={handle.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-center icon-wrapper"
          key={index}
        >
          {handle.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialHandles;
