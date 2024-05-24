import './App.css'
import './css/footer.css'
import './css/navbar.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { useState } from 'react'
import { Route, Routes, useNavigate } from "react-router-dom";
import Izdelki from './components/Izdelki'
import DodajIzdelek from './components/DodajIzdelek'




function App(){



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/izdelki" element={<Izdelki />} />
        <Route path="/dodajIzdelek" element={<DodajIzdelek />} />
      </Routes>
      <Footer />      
    </>
  )
}

export default App
