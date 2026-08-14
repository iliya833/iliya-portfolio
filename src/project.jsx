import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { FaMoon, FaSun } from "react-icons/fa";
import { CiDark } from 'react-icons/ci'
import './App.css'
import {Link} from "react-router-dom"
import { BiColor } from 'react-icons/bi';


function Project() {
    const [open, setOpen] = useState(false)
  const [mainColor, setMainColor] = useState("#3b82f6")
   const [dark, setDark] = useState(false)
   const [page, setPage] = useState("home")
  useEffect(() => {
    document.body.classList.toggle("dark", dark)

  }, [dark])
   
   
   return(
<>
 <div className={dark ? "app_dark" : "app"}>
  <div className='container'>
  <div className='left-side'>
  <div className='header'>

  <h1 className="ily">👨  Iliya Soly</h1>

  <div className="icons">

    <div className="color-switcher">

      <button
        className="color-buttom" style={{backgroundColor: mainColor}}
        onClick={() => setOpen(!open)}
      ></button>

        {open && (
        <div className="colors">
          <button className="blue" onClick={() => {setMainColor("#3b82f6");  setOpen(false)}}></button>
          <button className="red" onClick={() => {setMainColor("#ef4444");  setOpen(false)}}></button>
          <button className="green" onClick={() => {setMainColor("#22c55e"); setOpen(false)}}></button>
         
          
         
        </div>
      )}
 
</div>

   <button
      className={dark ? "light-icon" : "dark-icon"}
      onClick={() => setDark(!dark)}
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>

</div>
</div>

 <div>
    <hr className='hr'></hr>
  </div>

    <div>
    <p className='me'>About Me</p>
    <p>i am iliya, softwere enginaier
      <br /> this is my digital garden</p>
  </div>

   <hr className='hr2'></hr>

    <div>
    <li> 🧑‍💻 Blog</li>
     <li>📓 Nots</li>
      <li><Link to={"/project"}>❄️ Project</Link></li>
      
       <li>🙋‍♂️ About Me</li>
  </div>

  <hr className='hr3'></hr>

  <div>
    <p className='stay'>Stay Conected</p>
    <p className='email'>Email signup</p>
    <p className='ine'>Inestgram</p>
    <p className='phone'>Phone Number</p>
  </div>
</div>
</div>


<div className='right-side'>
<div className="projects-page">

      <h1>Projects</h1>

      <p className="projects-intro">
        Some projects I've made over the years, including websites,
        games, apps and other things.
      </p>

      <div className="projects-grid">

        <div className="project-card">
          <span className="project-year">2026</span>
          <h2 style={{color:mainColor}}>My Portfolio</h2>
          <p>
            My personal portfolio website built with React.
          </p>
          <div className="project-links">
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>

        <div className="project-card">
          <span className="project-year">2026</span>
          <h2 style={{color:mainColor}}>React Project</h2>
          <p>
            A project I built while learning React and JavaScript.
          </p>
          <div className="project-links">
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>

        <div className="project-card">
          <span className="project-year">2026</span>
          <h2 style={{color:mainColor}}>Weather App</h2>
          <p>
            A weather application built with a public API.
          </p>
          <div className="project-links">
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>

        <div className="project-card">
          <span className="project-year">2025</span>
          <h2 style={{color:mainColor}}>WordPress Website</h2>
          <p>
            A website I created using WordPress.
          </p>
          <div className="project-links">
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>

        <div className="project-card">
          <span className="project-year">2025</span>
          <h2 style={{color:mainColor}}>To Do App</h2>
          <p>
            A simple application for managing daily tasks.
          </p>
          <div className="project-links">
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>

        <div className="project-card">
          <span className="project-year">2025</span>
          <h2 style={{color:mainColor}}>Calculator</h2>
          <p>
            A simple calculator built with JavaScript.
          </p>
          <div className="project-links">
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>

        <div className="project-card">
          <span className="project-year">2025</span>
          <h2 style={{color:mainColor}}>Clash Royale Project</h2>
          <p>
            A small project inspired by Clash Royale.
          </p>
          <div className="project-links">
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>

        <div className="project-card">
          <span className="project-year">2025</span>
          <h2 style={{color:mainColor}}>Game Project</h2>
          <p>
            A small game project created for practice.
          </p>
          <div className="project-links">
            <a href="#" className='zir'>Demo</a>
            <a href="#">Source</a>
          </div>
        </div>

        <div className="project-card">
          <span className="project-year">2024</span>
          <h2 style={{color:mainColor}}>First Website</h2>
          <p>
            One of my first websites created while learning web development.
          </p>
          <div className="project-links">
            <a href="#">Demo</a>
            <a href="#">Source</a>
          </div>
        </div>
        </div>

      </div>
      </div>

 </div>
</>
   )
}

export default Project;