import React, {useState} from 'react'
import "./Projects.css"
import { projects } from '../../sources'
import ProjectCard from './ProjectCard'
import ProjectNavigation from './ProjectNavigation'

const Projects = () => {
  const [activeProjects, setActiveProjects] = useState(projects)
  const getTabs = () => {
    const tabs = ["All"];
    projects.map((item) => {
      if (!tabs.includes(item.category)) {
        tabs.push(item.category);
      }
    });
      return tabs;
    }
  return (
    <section id='projects'>
      <div className="wrapper">
      <div className="section-header">
        <h1 className="heading-1">
          <span className="gradient-text">Projects</span>
        </h1>
      </div>
      <ProjectNavigation tabs={getTabs()}/>
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
