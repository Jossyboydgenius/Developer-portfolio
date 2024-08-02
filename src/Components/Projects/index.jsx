import React, {useEffect, useState} from 'react'
import "./Projects.css"
import { projects } from '../../sources'
import ProjectCard from './ProjectCard'
import ProjectNavigation from './ProjectNavigation'

const Projects = () => {
  const [activeProjects, setActiveProjects] = useState(projects)
  const [load, setLoad] = useState(false)
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    },600)
  }, [activeProjects])
  const getTabs = () => {
    const tabs = ["All"];
    projects.map((item) => {
      if (!tabs.includes(item.category)) {
        tabs.push(item.category);
      }
    });
      return tabs;
    }
    const setProjects = (value) => {
      if (value === "All") {
        return setActiveProjects(projects);
      }
      const new_projects = projects.filter((item) => item.category === value);
      setActiveProjects(new_projects);
    }
  return (
    <section id='projects' data-aos='fade-right'>
      <div className="wrapper">
      <div className="section-header">
        <h1 className="heading-1">
          <span className="gradient-text">Projects</span>
        </h1>
      </div>
      <ProjectNavigation tabs={getTabs()} onChange={setProjects}/>
      <div className="projects-container">
        {
          activeProjects.map((project, index) => (
            <ProjectCard 
            {...project}
            className={load ? 'zoom' : ''}
            key={index} project={project}/>
          ))
        }
      </div>
      </div>
    </section>
  )
}


export default Projects
