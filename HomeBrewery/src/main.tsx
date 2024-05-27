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

import LoginSuccess from './components/LoginSuccess.tsx';
import TestAddEvent from './components/TestAddEvent.tsx';

import DodajIzdelek from './components/DodajIzdelek.tsx';
import Cart from './components/Cart.tsx';
import Kosarica from './components/Kosarica.tsx';
import IzdelekDetails from './components/IzdelekDetails.tsx';

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
    path: '/izdelki/:id',
    element: (
      <>
        <Navbar />
        <IzdelekDetails  />
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
    path: '/kosarica',
    element: (
      <>
        <Navbar />
        <Kosarica />
        <Footer />
      </>
    ),
  },
  {
    path: '/cart',
    element: (
      <>
        <Navbar />
        <Cart />
        <Footer />
      </>
    ),
  },
  {
    path: "/room/:roomId",
    element: [<Navbar />, <ChatRoom />, <Footer /> ]
  },
  {
    path: "/login-success",
    element: <LoginSuccess />
  },
  {
    path: "/dodaj",
    element: <TestAddEvent />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
