import React from 'react'
import ServiceHome from './ServiceHome'
import './Services.css'
import Industries from './Industries'
import BrandGrid from '../components/BrandGrid'
import Footer from '../components/Footer'


const ServicePage = () => {
    return (
        <div>
              <ServiceHome />
              <Industries />
              <BrandGrid />
              <Footer />
        </div>
    )
}

export default ServicePage
