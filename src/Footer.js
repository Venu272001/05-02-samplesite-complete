import React from 'react'
import Logo from '../Assets/Logo.svg'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={ Logo } alt=''/>
            </div>
            <div className='footer-icons'>
                <BsLinkedin />
                <BsYoutube />
                <BsTwitter />
                <BsFacebook />               
            </div>
        </div>
        <div className='footer-section-two'>
            <div className='footer-section-columns'>
                <span>0422-24356823,</span>
                <span>123, M.G.Road,</span>
                <span>Sai Baba Colony,</span>
                <span>Coimbatore-641022.</span>
            </div>
            <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Careers</span>
                <span>Work</span>
            </div>
            <div className='footer-section-columns'>
                <span>Terms & Conditions</span>   
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer