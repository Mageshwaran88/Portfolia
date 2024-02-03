import React, { useEffect } from "react";
import "./projects.css";
import todolist from "../assets/66b82aab-e239-400f-af41-f4878bcd9f0e.png";
import shopping from "../assets/2a72edac-297a-4ce7-a131-590d4e9ccf84.png";
import portpolia from "../assets/e2d1ba9c-aa38-49a1-96b3-07f55bd6d333.png";
import Aos from "aos";
import "aos/dist/aos.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const Projects = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="projectpage">
      <div className="projhead">
        <h1>My Projects</h1>
      </div>
      <div className="projcontain">
        <div className="projimgcontain">
          <div className="projimages" data-aos='flip-right'>
            <a href="https://practiceone-theta.vercel.app/"><img className="projimg" src={todolist} />
            <h1 className="projname">To-Do-List</h1></a>
            <a className="icons " href="https://github.com/Mageshwaran88"><FontAwesomeIcon icon={faGithub}/></a>
            <a className="icons1" href="linkedin.com/in/mageshwaran-m-2a584b281"><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
          <div className="projimages" data-aos='flip-right'>
            <img className="projimg" src={shopping} />
            <h1 className="projname">Shopping Website</h1>
            <a className="icons " href="https://github.com/Mageshwaran88"><FontAwesomeIcon icon={faGithub}/></a>
            <a className="icons1" href="linkedin.com/in/mageshwaran-m-2a584b281"><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
          <div className="projimages" data-aos='flip-right'>
            <img className="projimg" src={portpolia} />
            <h1 className="projname">Portfolia</h1>
            <a className="icons " href="https://github.com/Mageshwaran88"><FontAwesomeIcon icon={faGithub}/></a>
            <a className="icons1" href="linkedin.com/in/mageshwaran-m-2a584b281"><FontAwesomeIcon icon={faLinkedin}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};
