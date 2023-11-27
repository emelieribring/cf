import React from 'react';
import './links.css';
import Rhino from '../../img/RhinoX.png';
import Female from '../../img/FemaleRanger3.png';
import Elephant from '../../img/Elephant.png';
import Fire from '../../img/FireOrb .png';


export default function Links() {
  return (
    <div className='links'>
        <div className='avatarLinks'>
            <div className='avatarLink'>
                <img className='avatarImg' src={Rhino} alt="" />
                <p className='avatarText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio iure minus modi possimus nam. </p>
            </div>
            <div className='avatarLink'>
                <img className='avatarImg'  src={Female} alt="" />
                <p className='avatarText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio iure minus modi possimus nam. </p>
            </div>
            <div className='avatarLink'>
                <img className='avatarImg'  src={Fire} alt="" />
                <p className='avatarText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio iure minus modi possimus nam. </p>
            </div>
            <div className='avatarLink'>
                <img className='avatarImg' src={Elephant} alt="" />
                <p className='avatarText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio iure minus modi possimus nam. </p>
            </div>
            <div className='avatarLink'>
                <img className='avatarImg'  src={Rhino} alt="" />
                <p className='avatarText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio iure minus modi possimus nam. </p>
            </div>
            <div className='avatarLink'>
                <img className='avatarImg'  src={Female} alt="" />
                <p className='avatarText'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Odio iure minus modi possimus nam. </p>
            </div>
        </div>
    </div>
  )
}
