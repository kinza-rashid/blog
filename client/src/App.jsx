import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'
import Signup from './pages/Signup.jsx'
import Header from './components/Header.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/dashboard' element={<Dashboard/>} />
    <Route path='/projects' element={<Projects/>} />
    <Route path='/signup' element={<Signup/>} />
      

   </Routes>
   
   </BrowserRouter>
  )
}

export default App
