import React from 'react'
import './navbar.css';

export default function Navbar() {
  return (
    <div className='navbar'>
        <div className="rightNav">
            <div className="logo">LOGO</div>
        </div>
        <div className="middleNav">
            <ul className='middleNavUl'>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
                <li>Link</li>
            </ul>
        </div>
        <div className="leftNav">
            <ul className='leftNavUl'>
                <li>Login In</li>
                <li>Register</li>
            </ul>
        </div>
    </div>
  )
}
