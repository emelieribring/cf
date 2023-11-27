import React from 'react'
import './header.css';
import Navbar from '../navbar/Navbar';
import Links from '../links/Links';

export default function header() {
  
  var countDownDate = new Date("April 25, 2024 00:00:00").getTime();

  var x = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";

      if (distance < 0) {
          clearInterval(x);
          document.getElementById("countdown").innerHTML = "EXPIRED";
      }
  }, 1000);

  const handleMouseOver = () => {
    const hoverEarth = document.querySelector('.hoverEarth');
    const hoverEarthText = document.querySelector('.hoverEarthText');
    if (hoverEarth) {
      hoverEarthText.style.visibility = 'visible';
    }
}

const handleMouseLeave = () => {
    const hoverEarth = document.querySelector('.hoverEarth');
    const hoverEarthText = document.querySelector('.hoverEarthText');
  if (hoverEarth) {
    hoverEarthText.style.visibility = 'hidden';
  }
}


  return (
    <>
      <div className='header'>
          <Navbar/>
          <div className='headerText'>
            <div className='headerTitle'>
              <p>Climate Fest</p>
            </div>
          </div>
          <div className='hoverEarth' onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <p className='hoverEarthText' >Sardinen <br />wohoo</p>
          </div>
          <div id="countdown"></div>
      </div>
      <Links/>
    </>
  )
}
