import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Project from './project.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}></Route>
       <Route path='/project' element={ <Project />}></Route>
    </Routes> 
    </BrowserRouter>
  </StrictMode>
)
