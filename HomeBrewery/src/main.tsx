import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar.tsx';
import ChatRoom from './components/ChatRoom.tsx';
import Footer from './components/Footer.tsx';
import Izdelki from './components/Izdelki.tsx';
import DodajIzdelek from './components/DodajIzdelek.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />
  },
  {
    path: '/izdelki',
    element: (
      <>
        <Navbar />
        <Izdelki />
        <Footer />
      </>
    ),
  },
  {
    path: '/dodajIzdelek',
    element: (
      <>
        <Navbar />
        <DodajIzdelek />
        <Footer />
      </>
    ),
  },
  {
    path: "/room/:roomId",
    element: [<Navbar />, <ChatRoom />, <Footer /> ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
