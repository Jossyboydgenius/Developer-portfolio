import React, { useEffect, useState } from 'react'
import "./Achievement.css"
import ReactOdometer from 'react-odometerjs'

const Achievement = () => {
    const[experience, setExperience] = useState(0);
    const[clients, setClients] = useState(0);
    const[projects, setProjects] = useState(0);

    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setClients(15);
            setExperience(3);
            setProjects(20);
        }, 3000);

        return () => clearTimeout(timeOutId);
    },[]);

  return (
    <div className='achievement-container'>
        <div className="card">
            <div className="flex-center">
                <ReactOdometer value={experience} className='title'/>
                <h1 className="title">+</h1>
            </div>
            <p className="muted name">Years of Exprience</p>
        </div>


        <div className="card">
            <div className="flex-center">
                <ReactOdometer value={clients} className='title'/>
                <h1 className="title">+</h1>
            </div>
            <p className="muted name">Clients Worldwide</p>
        </div>

        
        <div className="card">
            <div className="flex-center">
                <ReactOdometer value={projects} className='title'/>
                <h1 className="title">+</h1>
            </div>
            <p className="muted name">Completed Projects</p>
        </div>
    </div>
  )
}

export default Achievement
