import React from 'react'
import "./ProjectCard.css"
import { AiOutlineShareAlt } from 'react-icons/ai'

const ProjectCard = ({
    title,
    description,
    image,
    demoLink,
    stack,
    className,
}) => {
  return (
    <div className={`project-card ${className ? className : ''}`}>
      <div className="picture">
        <img src={image} alt={title} />
      </div>
      <div className="details">
      <div className="top">
        <h2 className="title">{title}</h2>
      </div>
      <div className="middle">
        <p className="muted description">{description}</p>
      </div>
      <div className="bottom">
        <div className="stack-container">
            <div className="stack-left">Stack</div>
            <div className="stack-right">
            <div className="stack-box-container">
                {
                stack.map((list, index) => (
                    <div className="stack-box" key={index}>
                        <div className="stack-icon-container">
                            <span 
                            style={{ color: list.iconColor}}
                            className="flex-center stack-icon"
                            >
                                {list.icon}
                            </span>
                            <span className="stack-name">{list.name}</span>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
      </div>
        <div className="flex-center buttons-container">
            <a href={demoLink} target="_blank" className="btn primary">Demo</a>
            <div className="flex-center btn btn-share">
                <AiOutlineShareAlt/>
            </div>
            </div>
    </div>
    </div>
    </div>
  )
}

export default ProjectCard
