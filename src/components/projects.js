import React from 'react';
import Profile from '../data';
import { FaGithub, FaLink } from "react-icons/fa";

const Projects = () => {
    return(
        <div className="projectsContainer d-flex justify-content-center">
            <div className="projects col-lg-8 col-xl-5">
                <h1 className="title">Projects</h1>

                {Profile.projects ? 
                    <div>
                        {Profile.projects.map((project, index) => {
                            return(
                            
                                <div key={index} className="row project">
                                    <div className="col-sm-6 projectImage">
                                        <img src={project.image} alt={project.name}></img>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="projectData">
                                            <h3>{project.name}</h3>
                                            <p>{project.description}</p>
                                            <div>
                                                {project.techStack.map((tech, i) => {
                                                    return(
                                                        <li key={i}>{tech}</li>
                                                    )
                                                })}
                                            </div>
                                            <div>
                                                <li className="mr-2"><a href={project.githubLink}> <FaGithub className="githubIcon mr-2"/> </a></li>
                                                <li><a href={project.hostedURL}> <FaLink className="linkIcon"/> </a></li>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                            )
                        })}
                    </div>
                : ""}
            </div>
        </div>
    )
};

export default Projects;