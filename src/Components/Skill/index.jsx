import React from 'react'
import "./Skill.css"
import { skills } from '../../sources'
import SkillCard from './SkillCard'

const Skill = () => {
  return (
    <section id='skill'>
      <div className="wrapper">
        <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos='fade-left'>
            <span className="gradient-text">My Skills</span>
          </h1>
        </div>
        <div className="skills-container">
          {
            skills.map((list, index) => (
              <SkillCard 
              {...list}
              key={index}/>
            ))
          }
        </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
