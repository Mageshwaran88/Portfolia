import React, { useEffect } from "react";
import "./skills.css";
import htmlicon from "../assets/download.png";
import cssicon from "../assets/images.jpeg";
import scripticon from "../assets/5c22b2fc-6790-4d82-b303-f862ae4f4768.jpeg"
import reacticon from "../assets/download (1).png";
import Aos from "aos";
import "aos/dist/aos.css"

export const Skills = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div>
      <div className="firstcontain">
        <h1 className="headskill">Professional Skills</h1>
      </div>
      <div className="secondcontain">
        <div className="skillcontain">
        <div className="iconcontain" data-aos='fade-left'>
        <h1 className="iconhead">HTML5</h1>
          <img src={htmlicon} />
        </div>
        <div className="iconcontain" data-aos='fade-up'>
        <h1 className="iconhead">CSS3</h1>
          <img src={cssicon} />
        </div>
        <div className="iconcontain" data-aos='fade-down'>
        <h1 className="iconhead">JAVASCRIPT</h1>
          <img id="scriptimg" src={scripticon} />
        </div>
        <div className="iconcontain" data-aos='fade-right'>
        <h1 className="iconhead">REACT <br />JS</h1>
          <img src={reacticon} />
        </div>
        </div>
      </div>
    </div>
  );
};
