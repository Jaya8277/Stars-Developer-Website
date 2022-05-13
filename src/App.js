import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Service from './Components/Service.jsx';
import Contact from './Components/Contact.jsx';
import Navbar from './Components/Navbar.jsx';
import './Components/Navbar.css';
import Footer from './Components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
    <Footer/>

    </>
  );
};
export default App;