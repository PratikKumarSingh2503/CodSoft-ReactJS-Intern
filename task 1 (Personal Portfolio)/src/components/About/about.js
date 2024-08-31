import React from 'react';
import './about.css';
import myPic from './myPic.jpg';
import { useState } from 'react';

const About = () => {

    const [activeTab, setActiveTab] = useState('skills'); // State to manage active tab

    const skills = ['Web App Development',];
    const programmings = ['Java Programming'];
    const reacts = ['JavaScript, Native, Node.js'];
    const experiences = ['Internship at Codsoft', 'Internship at CodClause', 'Internship at Oasis Infobyte'];
    const graduations = ['B. Tech from MSIT Kolkata'];
    const heducations = ['12 from Amrita Vidyalayam Kolkata'];

    const opentab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="about">
            <div className="aboutSec">
                <h1>About Me</h1>
                <div className='about-row'>
                    <div className='about-col1'>
                        <img className='myPic' src={myPic} alt='' />
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus blanditiis provident corporis dicta praesentium ullam debitis, est accusantium repudiandae autem quos cumque suscipit consectetur ut molestiae, consequuntur necessitatibus veniam commodi.
                        </p>
                    </div>

                    <div className='about-col2'>
                        <div className="tab-titles">
                            <p
                                className={`tab-links ${activeTab === 'skills' ? 'active-link' : ''}`}
                                onClick={() => opentab('skills')}>
                                Skills
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'experience' ? 'active-link' : ''}`}
                                onClick={() => opentab('experience')}>
                                Experience
                            </p>
                            <p
                                className={`tab-links ${activeTab === 'education' ? 'active-link' : ''}`}
                                onClick={() => opentab('education')}>
                                Education
                            </p>
                        </div>

                        <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`}>
                            <h2>Web Development</h2>
                            <ul>
                                {skills.map((skill, index) => (
                                    <li key={`skill-${index}`}>{skill}</li>
                                ))}
                            </ul>
                            <h2>Programming language</h2>
                            <ul>
                                {programmings.map((programming, index) => (
                                    <li key={`programming-${index}`}>{programming}</li>
                                ))}
                            </ul>
                            <h2>React fundamentals</h2>
                            <ul>
                                {reacts.map((react, index) => (
                                    <li key={`react-${index}`}>{reacts}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`}>
                            <h2>Web Development</h2>
                            <ul>
                                {experiences.map((experience, index) => (
                                    <li key={`experience-${index}`}>{experience}</li>
                                ))}
                            </ul>
                            <h2>Java</h2>
                            <ul>
                                {experiences.map((experience, index) => (
                                    <li key={`experience-${index}`}>{experience}</li>
                                ))}
                            </ul>
                        </div>

                        <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`}>
                            <h2>2025</h2>
                            <ul>
                                {graduations.map((graduation, index) => (
                                    <li key={`graduation-${index}`}>{graduation}</li>
                                ))}
                            </ul>
                            <h2>2021</h2>
                            <ul>
                                {heducations.map((heducation, index) => (
                                    <li key={`heducation-${index}`}>{heducation}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;