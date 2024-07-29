import React, {useState} from 'react'
import "./Projects.css"
import { projects } from '../../sources'
import ProjectCard from './ProjectCard'

const Projects = () => {
  const [activeProjects, setActiveProjects] = useState(projects)
  return (
    <section id='projects'>
      <div className="wrapper">
      <div className="section-heade">
        <h1 className="heading-1">
          <span className="gradient-text">Projects</span>
        </h1>
      </div>
      <div className="projects-container">
        {
          activeProjects.map((project, index) => (
            <ProjectCard 
            {...project}
            key={index} project={project}/>
          ))
        }
      </div>
      </div>
    </section>
  )
}

export default Projects
