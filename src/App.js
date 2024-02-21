import './App.scss';
import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';


function App() {
  return (
    <>
    <Router>
    <Menu/>
    <Hero/>
      <div className="mainContainer">
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route exact path="/about" element = {<AboutPage/>} />
          <Route exact path="/login" element={<LoginPage/>}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
