import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import ChatRoom from "./components/ChatRoom.tsx";
import Footer from "./components/Footer.tsx";
import Izdelki from "./components/Izdelki.tsx";

import LoginSuccess from "./components/LoginSuccess.tsx";
import TestAddEvent from "./components/TestAddEvent.tsx";

import DodajIzdelek from "./components/DodajIzdelek.tsx";
import Cart from "./components/Cart.tsx";
import Kosarica from "./components/Kosarica.tsx";
import IzdelekDetails from "./components/IzdelekDetails.tsx";
import Header from "./components/Header.tsx";
import HomeForum from "./components/HomeForum.tsx";
import Profile from "./components/Profile.tsx";
import Popular from "./components/Popular.tsx";
import NewPostForm from "./components/NewPostForm.tsx";
import PostPage from "./components/PostPage.tsx";
import Profil from "./components/Profil.tsx";
import { DarkModeProvider } from './components/DarkModeProvider.tsx';
import MyComponent from "./components/MyComponent.tsx";

// import "./css/global.css" 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/izdelki",
    element: (
      <>
        <Navbar />
        <Izdelki />
        <Footer />
      </>
    ),
  },
  {
    path: "/izdelki/:id",
    element: (
      <>
        <Navbar />
        <IzdelekDetails />
        <Footer />
      </>
    ),
  },
  {
    path: "/dodajIzdelek",
    element: (
      <>
        <Navbar />
        <DodajIzdelek />
        
      </>
    ),
  },
  {
    path: "/kosarica",
    element: (
      <>
        <Navbar />
        <Kosarica />
        <Footer />
      </>
    ),
  },
  {
    path: "/cart",
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
    element: [<Navbar />, <ChatRoom />, <Footer />],
  },
  {
    path: "/login-success",
    element: <LoginSuccess />,
  },
  {
    path: "/dodaj",
    element: [<TestAddEvent />, <Footer />],
  },
  {
    path: "/forum",
    element: [<Header />, <HomeForum />],
  },
  {
    path: "/forumProfile",
    element: [<Header />, <Profile />],
  },
  {
    path: "/popularPosts",
    element: [<Header />, <Popular />],
  },
  {
    path: "/newPost",
    element: [<Header />, <NewPostForm />],
  },
  {
    path: "/posts/:postId", // Define postId as a route parameter
    element: [<Header />, <PostPage />],
  },
  {
    path: "/profil",
    element: [<Navbar />, <Profil />, <Footer />],
  },
  {
    path: "test",
    element: [<Header/>,<MyComponent/>]
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DarkModeProvider>
    <RouterProvider router={router} />
    </DarkModeProvider>
  </React.StrictMode>,
);
