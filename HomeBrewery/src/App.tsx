import './App.css'
import './css/footer.css'
import './css/navbar.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";




function App(){



  return (
    <>
      <Navbar />
      <Home />
      <Footer />      
    </>
  )
}

export default App
