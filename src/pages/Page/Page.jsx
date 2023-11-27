import React, { useEffect, useState } from 'react';
import './page.css';
import Navbar from '../../components/navbar/Navbar';
import globe from '../../img/earthglobe.png';
import globe2 from '../../img/cloudBgEarth.png'; // Byt ut detta med den andra bilden

export default function Page() {
    const [scrollPosition, setScrollPosition] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const zoomLevel = 1 + scrollPosition / 1000; // Justera detta värde beroende på hur mycket du vill zooma in
  
    const getGlobeImage = () => {
      // Byt ut bilden baserat på scrollPosition eller något annat villkor
      if (scrollPosition > 500) {
        return globe2;
      } else {
        return globe;
      }
    };
  
    return (
      <div>
        <div className='parallaxTry'>
          <p className='paraText'>Climatet</p>
          <div style={{ transform: `scale(${zoomLevel})` }}>
            <img
              className='globe'
              src={getGlobeImage()}
              alt=''
            />
          </div>
          <p className='paraText'>Fest</p>
        </div>
      </div>
    );
  }