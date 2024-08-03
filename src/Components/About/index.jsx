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
            I'm Awe Joseph, a passionate fullstack software engineer, cybersecurity expert, and web developer. 
            My journey in tech is driven by a relentless curiosity and a desire to create secure, innovative solutions 
            that make a difference.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            From a young age, I've been fascinated by the power of technology to transform ideas into reality. 
            This fascination led me to dive deep into the world of software development, where I've honed my skills 
            across the entire stack. Whether I'm crafting intuitive user interfaces or architecting robust backend systems, 
            I approach each project with enthusiasm and a commitment to excellence.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            My expertise in cybersecurity isn't just a skill, it's a passion. In today's digital landscape, I believe that 
            security should be at the forefront of every technological solution. I take pride in my ability to build 
            systems that are not only functional and efficient but also fortified against potential threats.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            What sets me apart is my unique blend of technical proficiency and creative problem-solving. I don't just 
            write code; I craft experiences. Each project is an opportunity for me to push boundaries and explore new 
            possibilities. I thrive on challenges and am always eager to embrace cutting-edge technologies to deliver 
            solutions that exceed expectations.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            Collaboration is at the heart of my work ethic. I believe that the best results come from open communication, 
            shared ideas, and a willingness to learn from others. Whether I'm leading a team or contributing as a member, 
            I bring a positive attitude and a drive for collective success.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            Outside of coding, I'm an avid learner, always exploring new technologies and methodologies. I believe in 
            the power of continuous growth, both personally and professionally. This mindset allows me to stay ahead 
            of the curve and bring fresh, innovative ideas to every project I undertake.
          </h4>
          <h4 className="sub-title muted" data-aos='fade-left'>
            I'm excited about the future of technology and my role in shaping it. If you're looking for a dedicated 
            professional who can turn complex challenges into elegant, secure, and efficient solutions, I'd love to 
            connect. Let's work together to bring your ideas to life and create technology that makes a real impact.
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