import React from 'react'
import "./SocialHandles.css"
import { socialHandles } from '../../sources'

const SocialHandles = () => {
  return (
    <div className='handles-container'>
      {
        socialHandles.map((handle, index) => (
          <a
          href={handle.link}
          target='_blank'
          className='flex-center icon-wrapper'
          key={index}
          >
            {handle.icon}
          </a>
        ))
      }
    </div>
  )
}

export default SocialHandles
