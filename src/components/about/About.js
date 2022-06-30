import React from 'react'
import "./About.css";
import Img from "../../media/ab.jpg";

const About = () => {
  return (
    <div className='about-container'>
        <div className='about-desc'>
            <h3>Sobre Nosotros</h3>
            <p>"informacion"</p>
        </div>
        <div className='about-img'>
            <img src={Img} alt="about" />
        </div>
    </div>
  );
};

export default About