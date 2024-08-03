import React from 'react'
import "./About.css"
import { whyChooseMe } from '../../sources'

const About = () => {
  return (
    <section id='about'>
      <div className="wrapper">
        <div className="section-header">
          <h1 className="heading-1" data-aos='fade-left'>
            <span className="gradient-text">About Me</span>
          </h1>
          <h4 className="sub-title muted" data-aos='fade-left'>
            I'm Awe Joseph, a fullstack software engineer, cybersecurity expert, and web developer. 
            My passion lies in creating innovative, secure solutions that push the boundaries of technology.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            From crafting intuitive user interfaces to architecting robust backend systems, I approach each 
            project with enthusiasm and a commitment to excellence. My expertise in cybersecurity ensures 
            that every solution I deliver is not just functional, but also fortified against potential threats.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            What sets me apart is my blend of technical proficiency and creative problem solving. I don't just 
            write code; I craft experiences. Each project is an opportunity to explore new possibilities and 
            deliver solutions that exceed expectations.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            I thrive on collaboration and believe in the power of continuous learning. Whether leading a team 
            or contributing as a member, I bring a positive attitude and a drive for collective success.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            If you're looking for a dedicated professional who can turn complex challenges into elegant, 
            secure, and efficient solutions, let's connect. I'm excited about the possibility of working 
            together to create technology that makes a real impact.
          </h4>
        </div>
        <div className="group">
          {
            whyChooseMe.map((list, index) => (
              <div className='flex-center group-item' data-aos='fade-right' key={index}>
                <div className="flex-center icon-wrapper">
                {list.icon}
                </div>
                <h4 className="title">{list.title}</h4>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About
