/* eslint-disable no-unused-vars */
import React,{useRef,useEffect} from 'react'
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
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
const App = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.03, 
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <div data-scroll-container ref={scrollRef}  className='font-school '>
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