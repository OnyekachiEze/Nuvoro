import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './AboutPageSection/AboutPage';
import ServicesPage from './ServicesPageSection/ServicePage';
import AcademyPage from './AcademySection/AcademyPage';
import BlogPage from './BlogPage/BlogPage';
import SignupPage from './Form/SignupPage';
import LoginForm from './Form/LoginForm';
import PortfolioPage from './PortfolioPage/PortfolioPage';
import ApplicationPage from './ApplicationPage/ApplicationPage';
import BlogPage1 from './BlogPage/BlogPage1';
import BlogPage2 from './BlogPage/BlogPage2';
import BlogPage3 from './BlogPage/BlogPage3';
import GoogleNewsBlog from './BlogPage/GoogleNewsBlog';
import SpiesNewsBlog from './BlogPage/SpiesNewsBlog';
import MotoRazrReview from './BlogPage/MotoRazrReview'
import MicrosoftSurfaceNews from './BlogPage/MicrosoftSurfaceNews';
import ArmsRoboticLimbsNews from './BlogPage/ArmsRoboticLimbsNews';
import XaiNews from './BlogPage/XaiNews';











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
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/blog1" element={<BlogPage1 />} />
        <Route path="/blog2" element={<BlogPage2 />} />
        <Route path="/blog3" element={<BlogPage3 />} />
        <Route path="/GoogleNewsBlog" element={<GoogleNewsBlog />} />
        <Route path="/SpiesNewsBlog" element={<SpiesNewsBlog />} />
        <Route path="/MotoRazrReview" element={<MotoRazrReview />} />
        <Route path="/MicrosoftSurfaceNews" element={<MicrosoftSurfaceNews />} />
        <Route path="/ArmsRoboticLimbsNews" element={<ArmsRoboticLimbsNews />} />
        <Route path="/XaiNews" element={<XaiNews />} />


        {/* Add more routes as needed */}
    
      </Routes>
    </Router>
  );
};

export default App;
