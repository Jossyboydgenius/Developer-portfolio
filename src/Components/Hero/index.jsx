import React, { useState, useEffect } from 'react';
import "./Hero.css";
import { Link } from 'react-scroll';
import me from '../../assets/me.png';
import Achievement from '../../Commons/Achievement';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  const [text, setText] = useState('Software Engineer');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(300);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [startTyping, setStartTyping] = useState(false); // New state for initial delay

  const titles = ['Software Engineer', 'Web Developer', 'Cybersecurity Engineer'];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setTypingSpeed(10); // Faster deletion
      } else {
        setText(fullText.substring(0, text.length + 1));
        setTypingSpeed(70); // Normal typing speed
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    if (startTyping) {
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, loopNum, typingSpeed, titles, startTyping]);

  useEffect(() => {
    const i = loopNum % titles.length;
    const fullText = titles[i];
    if (fullText === 'Cybersecurity Engineer') {
      if (viewportWidth <= 1150 && viewportWidth >= 1075) {
        document.documentElement.style.setProperty('--typing-font-size', '0.7em');
      } else if (viewportWidth <= 1074 && viewportWidth >= 1051) {
        document.documentElement.style.setProperty('--typing-font-size', '0.6em');
      } else {
        document.documentElement.style.setProperty('--typing-font-size', '0.8em');
      }
    } else {
      document.documentElement.style.setProperty('--typing-font-size', '0.8em');
    }
  }, [viewportWidth, loopNum, titles]);

  useEffect(() => {
    const delayTimer = setTimeout(() => setStartTyping(true), 1000); // Initial delay of 1000ms
    return () => clearTimeout(delayTimer);
  }, []);

  const getClassNames = () => {
    let classNames = 'typing-text';
    if (text === 'Cybersecurity Engineer') {
      classNames += ' cybersecurity-engineer';
      if (viewportWidth <= 1150 && viewportWidth >= 1075) {
        classNames += ' cybersecurity-engineer-0_7em';
      } else if (viewportWidth <= 1074 && viewportWidth >= 1051) {
        classNames += ' cybersecurity-engineer-0_6em';
      }
    }
    if (text !== 'Web Developer') {
      classNames += ' smaller-text';
    }
    return classNames;
  };

  return (
    <section id='hero'>
      <div className="wrapper info-container">
        <div className="column">
          <h3 className='sub-title' data-aos='fade-right'>
            Hello, I'm <span className='primary'>Awe Joseph</span>
          </h3>
          <h1 className="heading-1" data-aos='fade-up'>
            A <span className="gradient-text">Fullstack</span>
          </h1>
          <h1 className="heading-1 typing-container" data-aos='fade-down'>
            <span className={getClassNames()} style={{ fontSize: 'var(--typing-font-size)' }}>{text}</span>
            <span className="cursor"></span>
          </h1>
          <p className="muted" data-aos='fade-up' data-aos-delay='300'>
            Innovative problem solver with a passion for creating secure, scalable solutions. 
            Leveraging cutting edge technologies to craft intuitive user experiences and robust backend systems. 
            Let's build the future of tech together!
          </p>
          <div className="flex-center buttons-wrapper">
            <Link to='services' smooth={true} className='btn primary' data-aos='fade-up' data-aos-delay='300'>Learn more</Link>
            <Link to='contact' smooth={true} className='btn secondary' data-aos='fade-up' data-aos-delay='400'>Get started</Link>
          </div>
        </div>
        <div className="column hero-image" data-aos='fade-left' data-aos-delay='100'>
          <img src={me} alt="Awe Joseph"/>
        </div>
      </div>
      <div className="achievement-cluster">
        <div className="wrapper">
          <Achievement/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
