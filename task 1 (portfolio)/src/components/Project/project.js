import React from 'react';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import './project.css';

const Project = () => {
  return (
    <section className='project'>
      <div className="projectSec">
        <h1>Project Section</h1>
        <div className="projectContent">
          <div className="projectImg">
            <img src={project1} alt="" height="400px" width="400px" />
            <h4>Tribute Page</h4>
            <a href='https://codsoft-04.vercel.app/'>
              <button>Visit here</button>
            </a>
          </div>
          <div className="projectImg">
            <img src={project2} alt="" height="400px" width="400px" />
            <h4>Landing Page</h4>
            <a href='https://codsoft-01.vercel.app/'>
              <button>Visit here</button>
            </a>
          </div>
          <div className="projectImg">
            <img src={project3} alt="" height="400px" width="400px" />
            <h4>Calculator</h4>
            <a href='https://codsoft-03.vercel.app/'>
              <button>Visit here</button>
            </a>
          </div>
        </div>
        <p>Currently, working on tasks allocated by CODSOFT</p>
      </div>
    </section >
  )
}

export default Project;