import React, { useEffect } from 'react'
import "./home.css"
import homeimg from '../assets/home-main.541f8179af8209ce03ccf2178fe62dbf.svg'
import Aos from 'aos'
import "aos/dist/aos.css"
export const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className='homepage'>
      <div className='leftcontain' data-aos='fade-up'>
        <h1 className='headone'>I'm Mageshwaran</h1>
        <h1 className='headtwo'>Frontend Developer</h1>
        <h1 className='headthree'>Turning Ideas Into Interactive Reality</h1>
      </div>
      <div className="rightcontain" data-aos='fade-down'>
        <img src={homeimg} className='homeimg'/>
      </div>
    </div>
  )
}
