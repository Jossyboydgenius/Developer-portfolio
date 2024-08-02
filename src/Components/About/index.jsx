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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At distinctio facere omnis alias laborum recusandae magnam harum velit cupiditate,
            veritatis exercitationem blanditiis quas quisquam, est obcaecati. Ullam adipisci hic voluptate.
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
