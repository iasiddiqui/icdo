import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home/Home.js'
import Header from './components/header/Header.js'
// import Session from './components/Scientific-Sessions/Session.js';
// import Navbar from './components/navbar/Navbar.js';

const App=()=>(
  <>
   <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Header" element={<Header/>}></Route>
      {/* <Route path="/Session" element={<Session/>}></Route> */}
      
     </Routes>
   </BrowserRouter>
  </>
)

export default App
