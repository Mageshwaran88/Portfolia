import React, { useEffect } from "react";
import userimg from "../assets/avatar.5852f40fbb38aa284829fa3fb7722225.svg";
import "./about.css";
import Aos from 'aos'
import "aos/dist/aos.css"

export const About = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className="aboutpage">
      <div className="introcontain" data-aos='fade-left'>
        <h1 className="introhead">LET ME INTRODUCE MYSELF</h1>
        <p className="aboutpara">Hi, <span className="textspan">I'm Mageshwaran,</span> a <span className="textspan">frontend developer</span> proficient in <span className="textspan">HTML, CSS, and JavaScript.</span></p>
        <p className="aboutpara"> I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️</p>
        <p className="aboutpara" >I am fluent in <span className="textspan">HTML, CSS, JavaScript and React Js.</span></p>
        <p className="aboutpara">Experienced <span className="textspan">React.js</span> developer creating dynamic and scalable user interfaces.</p>
      </div>
      <div className="iconcontain" data-aos='fade-right'>
        <img src={userimg} />
      </div>
    </div>
  );
};
