import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './AboutPageSection/AboutPage';




// Stats number animation function
const animateNumber = (setNumber, finalNumber, duration) => {
  const increment = finalNumber / (duration / 50);
  let currentNumber = 0;

  const interval = setInterval(() => {
    currentNumber += increment;
    if (currentNumber >= finalNumber) {
      clearInterval(interval);
      setNumber(Math.floor(finalNumber) + '+');
    } else {
      setNumber(Math.floor(currentNumber) + '+');
    }
  }, 50);
};

const App = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [clientCount, setClientCount] = useState('0');
  const [projectCount, setProjectCount] = useState('0');
  const [partnerCount, setPartnerCount] = useState('0');

  useEffect(() => {
    // Start stats number animations with delays
    setTimeout(() => animateNumber(setClientCount, 350, 1500), 500);
    setTimeout(() => animateNumber(setProjectCount, 502, 1500), 800);
    setTimeout(() => animateNumber(setPartnerCount, 14, 1500), 1100);
  }, []);

  

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
};

export default App;
