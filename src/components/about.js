import React from 'react';
import MyImage from '../images/me.png';

const About = () => {
    return(
        <div className="about">
            <div className="row aboutContainer">
                <div className="col left">
                    <img src={MyImage} alt="" className="myImage"></img>
                    <h5>Developer | Coder </h5>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/sharmavanshika/">L</a>
                        <a href="https://github.com/sVanshika"><i className="bi bi-github"></i></a>
                    </div>
                </div>
                <div className="col right">
                    <h1>HELLO</h1>
                    <h2>I'm Vanshika Sharma</h2>
                    <p>I am a final year computer science undergrad. Focused. Keen learner. Tech enthusiast</p>
                </div>
            </div>
        </div>
    )
};

export default About;