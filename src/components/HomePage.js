import React from 'react'
// import React, { useState, useEffect } from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import CoursesTabs from '../components/CoursesTabs';
import TestimonialSection from '../components/TestimonialSection';
import BrandGrid from '../components/BrandGrid';


const HomePage = () => {
  return (
    <div>
      <HeroSection  />
      <ServicesSection />
      <CoursesTabs />
      <TestimonialSection />
      <BrandGrid />
      
    </div>
  )
}

export default HomePage