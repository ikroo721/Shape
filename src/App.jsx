/* eslint-disable no-unused-vars */
import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Carousel from './Components/Carousel'
import Work from './Components/Work'
import Brandidentity from './Components/Brandidentity'
import History from './Components/History'
import Line from './Components/Line'
import ReviewCarousel from './Components/ReviewCarousel'
import Footer from './Components/Footer'
import './font.css';
const App = () => {
  return (
    <div className='font-school '>
      <Navbar/>
      <Hero/>
      <Carousel/>
      <Work/>
        <Brandidentity/>
        <History/>
        <Line/>
        <ReviewCarousel/>
        <Footer/>
    </div>
  )
}

export default App