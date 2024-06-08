import './App.css'
import './css/footer.css'
import './css/navbar.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from "react-router-dom";
import Izdelki from './components/Izdelki'
import DodajIzdelek from './components/DodajIzdelek'
import Cart from './components/Cart'
import Kosarica from './components/Kosarica'




function App(){



  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/izdelki" element={<Izdelki />} />
        <Route path="/dodajIzdelek" element={<DodajIzdelek />} />
        <Route path="/kosarica" element={<Kosarica />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />      
    </>
  )
}

export default App
