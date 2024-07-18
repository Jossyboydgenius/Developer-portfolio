import React from 'react'
import "./Hero.css"
import { Link } from 'react-scroll'
import me from '../../assets/me.png'
import Achievement from '../../Commons/Achievement'

const Hero = () => {
  return (
    <section id='hero'>
      <div className="wrapper info-container">
        <div className="column">
          <h3 className='sub-title'>
            Hello, I'm <span className='primary'>Awe Joseph</span>
          </h3>
          <h1 className="heading-1">
            A <span className="gradient-text">Fullstack</span> Software Engineer
          </h1>
          <p className="muted">
          {/* // TODO: Change this text to something more personal */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quaerat consectetur sapiente, beatae deserunt reprehenderit eaque hic, ullam distinctio inventore nemo,
            ea nam facere voluptas maxime laborum. Ipsum, vel? Quo, beatae!
          </p>
          <div className="flex-center buttons-wrapper">
            <Link to='services' smooth={true} className='btn primary'>Learn more</Link>
            <Link to='contact' smooth={true} className='btn secondary'>Get started</Link>
          </div>
        </div>
        <div className="column hero-image">
          <img src={me} alt="" />
        </div>
      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement/>
        </div>
      </div>
    </section>
  )
}

export default Hero
