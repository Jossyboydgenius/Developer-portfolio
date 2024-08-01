import React from 'react'
import "./Contact.css"
import { contactOptions } from '../../sources'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="wrapper">
        <div className="contact-options">
          {
            contactOptions.map((option, index) => (
              <div className="flex-center option" key={index}>
                <div className="flex-center icon-wrapper">{option.icon}</div>
                <h4 className="muted">{option.title}</h4>
                <h3 className="value">{option.value}</h3>
              </div>
            ))
          }
        </div>
        <div className="contact-form">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Join forces with me!</span>
            </h1>
            <p className="muted">
              I build with precision and passion, creating robust and scalable applications, web projects that stands out.
              I am always open to new opportunities and collaborations. Feel free to reach out to me for any enquiry.
              </p>
          </div>
          <div className="middle">
            <div className="flex row">
              <input type="text" placeholder='First name' name='firstname' className='control'/>
              <input type="text" placeholder='Last name' name='lastname' className='control'/>
            </div>
            <div className="flex row">
              <input type="email" placeholder='Email address' name='email' className='control'/>
              <input type="tel" placeholder='Phone number' name='phone' className='control'/>
            </div>
            <textarea name="message" cols={30} rows={10} placeholder='Message' className='control'></textarea>
          </div>
          <div className="flex-center bottom">
            <button className='btn primary'>Send Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
