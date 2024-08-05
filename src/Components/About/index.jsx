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
            I'm Awe Joseph, a Nigerian fullstack software engineer, web developer, and cybersecurity expert with a unique background. 
            Despite my degree in Geology from Ekiti State University, I've successfully transitioned into the tech 
            industry through self directed learning and hands on experience.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            My expertise in cybersecurity ensures that every solution I deliver is not just functional, but also fortified against potential threats. 
            I approach each project with enthusiasm, whether it's developing web applications, creating software solutions, or implementing security measures.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            What sets me apart is my blend of technical proficiency and creative problem solving. I don't just 
            write code; I craft experiences. Each project is an opportunity to explore new possibilities and 
            deliver solutions that exceed expectations.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            If you're seeking a dedicated professional to transform complex challenges into 
            secure, efficient, and innovative solutions, let's connect and create impactful technology together.
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
