import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
       <h2>NEW ARRIVAILS ONLY</h2>
       <div>
        <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
       </div>
         <Link className="hero-latest-btn-link" to="/productlist">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=""/>
        </Link>
       
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  )
}

export default Hero
