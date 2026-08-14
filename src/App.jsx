import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { FaMoon, FaSun } from "react-icons/fa";
import { GiButterfly } from 'react-icons/gi'
import { CiDark } from 'react-icons/ci'
import {Link, NavLink } from "react-router-dom"
import Project from "./project.jsx"
import { BiFontFamily } from 'react-icons/bi'

function App() {
  const [open, setOpen] = useState(false)
  const [mainColor, setMainColor] = useState("#3b82f6")
   const [dark, setDark] = useState(false)
   const [page, setPage] = useState("home")
  useEffect(() => {
    document.body.classList.toggle("dark", dark)

  }, [dark])

 
return (
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
<GiButterfly className='buterfly'>🦋</GiButterfly>
  </div>
 
</div>
    
  <div>
    <hr className='hr'></hr>
  </div>
  
  <div>
    <p className='me'>About Me</p>
    <p>i am <span style={{color: mainColor}} className='khat'>iliya</span>, softwere enginaier
      <br /> this is my digital garden</p>
  </div>
 
  <hr className='hr2'></hr>
  <div>
    
  </div>
  <div>
    <li className='lif'>  🧑‍💻 Blog</li>
     <li className='lif'>📓 Nots</li>
      <li className='lif'><NavLink to={"/project"}>❄️ Project</NavLink></li>
      
       <li className='lif'><NavLink>🙋‍♂️ About Me</NavLink></li>
  </div>

  <div>
    <hr className='hr3'></hr>
  </div>
  <div>
    <p className='stay'>Stay Conected</p>
    <p className='email'>Email signup</p>
    <p className='ine'>Inestgram</p>
    <p className='phone'>Phone Number</p>
  </div>
  
  <button className='menu-button'>=</button>
  </div>
  <div className='right-side'> 
    <h1 className='title'>👨 About Me</h1>
    <div className='about-content'>
      <div className='text'>

         <p className='Tall'>hello i am <span className='khat' style={{color: mainColor}}>iliya</span> soleimani and iam <span className='khat' style={{color: mainColor}}>student</span> of computer sience this is my personal site <br />
          to show my  skils. i learned <span className='khat' style={{color: mainColor}}>front-end</span> from <span className='T' >School</span> and learn <span className='khat' style={{color: mainColor}}>curses</span>. befure the school <br />i work with <span className='khat' style={{color: mainColor}}>html</span> and 
          css and build website with wordpress, during these years i learn javascript and jsx and comlete my <span className='khat' style={{color: mainColor}}>skills</span> for Front.i am 18 years old live in <span className='T'>Tehran</span> , <span className='T'>Pardis</span> and usually im playing video game or scroling reals or 
          i am at the gym. here is for self-expression and to share what i ve learned in this <span className='T'>World</span> 
           hello i am iliya soleimani and ia m student of computer sience this is my personal site <br />
          to show my  skils. i learned front-end from school and learn curses. befure the school <br />i work with html and 
          css and build website with wordpress, during these years i learn javascript and jsx and comlete my skills 
          for Front.i am 18 years old live in Tehran , pardis and usually im playing video game or scroling reals or 
          i am at the gym. here is for self-expression and to share what i ve learned in this world
          <br />
          <br />
          Thank You TO Visit My Site

         </p>
         <br />
         <h2 className='contect'>Contact</h2>
         <hr className='kate'></hr>
         <p className='send'>Send me an email to say hi, or connect via the socials.</p>
         <ul>
         <li className='li'>Email: iliyasoleimani6@gmail.com</li>
         <li className='li'>EmailNewsetler</li>
         <li className='li'>Github</li>
         <li className='li'>Inestgrum</li>
         </ul>
         <h3 className="am">What I AM Doing Now</h3>
         <hr className='kate'></hr>
         <p className='send'>Updated March 12, 2026</p>
         <ul>
          <li className='li'>Working 4-5 hour</li>
           <li className='li'>Building this Web</li>
            <li className='li'>Plaing Hearts of iron 4 </li>
               <li className='li'>Plaing Clash Royal</li>
                  <li className='li'>Waching World Cup </li>
         </ul>
         <h3 className='tool'>Tools</h3>
         <hr className='kate'></hr>
         <p className='send'>This website is hosted on Netlify and uses the Gatsby SSG framework.</p>
        <ul>
        <li className='li'>Coding: Visual Studio Code</li>
         <li className='li'>Theme: New Moon Theme, my custom syntax theme!</li>
          <li className='li'>Terminal: iTerm2</li>
       </ul>
      </div>
      
    <img src='1783968515146.png' className='img'></img>
    
   
   </div>
  </div>
  </div>
  </div>
  </>
 
)

}

export default App
