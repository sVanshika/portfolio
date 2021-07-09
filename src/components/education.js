import React from 'react';
import Profile from '../data';

const Education = () => {
    return(
       <div className="education d-flex justify-content-center">
           <div className="educationContainer">
               <h1 className="title">Education</h1>
               {Profile.education ? 
                    <div>
                        {Profile.education.map((edu, index) => {
                            return(
                                <div key={index} className="educationBlock">
                                    <h6><span>{edu.startingYear}</span>-<span>{edu.endingYear}</span></h6>
                                    <h3>{edu.degree}</h3>
                                    <h5>{edu.schoolName}</h5>
                                    {edu.description.map((des, i) => {
                                        return(
                                            <div key={i}>
                                                <p>{des}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div> 
                : ""}
           </div>

       </div>
    )
};

export default Education;