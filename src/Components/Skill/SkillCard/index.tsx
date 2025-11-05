import React from 'react';
import './SkillCard.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import type { SkillCategory } from '@/data/types';

const SkillCard: React.FC<SkillCategory> = ({ data, title }) => {
  return (
    <div className="skill-card" data-aos="fade-right">
      <h3 className="title gradient-text">{title}</h3>
      <div className="skill-content">
        {data.map((list, index) => (
          <div className="skill-details" key={index}>
            <BsPatchCheckFill className="skill-icon" />
            <div className="details">
              <h4 className="skill-name">{list.skill}</h4>
              <small className="muted skill-level">{list.level}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
