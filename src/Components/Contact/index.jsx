import React from 'react'
import "./Contact.css"
import { contactOptions } from '../../sources'

const Contact = () => {
  return (
    <section id='contact' data-aos='fade-zoom-in'>
      <div className="wrapper">
        <div className="contact-options">
          {
            contactOptions.map((option, index) => (
              <div className="flex-center option" data-aos='fade-right' key={index}>
                <div className="flex-center icon-wrapper">{option.icon}</div>
                <h4 className="muted">{option.title}</h4>
                <h3 className="value">{option.value}</h3>
              </div>
            ))
          }
        </div>
        <div className="contact-form" data-aos='fade-left'>
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Let's Collaborate!</span>
            </h1>
            <p className="muted">
            Always open to new opportunities and collaborations, I invite you to connect with me for 
            any inquiries or project discussions.
            </p>
          </div>
          <form action="https://formspree.io/f/xyzgwlky" method="POST">
            <div className="middle">
              <div className="flex row">
                <input type="text" placeholder='First name' name='firstname' className='control' required />
                <input type="text" placeholder='Last name' name='lastname' className='control' required />
              </div>
              <div className="flex row">
                <input type="email" placeholder='Email address' name='email' className='control' required />
                <input type="tel" placeholder='Phone number' name='phone' className='control' />
              </div>
              <textarea name="message" cols={30} rows={10} placeholder='Message' className='control' required></textarea>
            </div>
            <div className="flex-center bottom">
              <button type='submit' className='btn primary'>Send Now</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
