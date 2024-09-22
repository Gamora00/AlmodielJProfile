import React from 'react'
import '../style/contact.css'
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useState } from 'react';
function Contact() {
    const [name, setName] = useState(false);

    const iconsMotions = ()=>{
        if(window.scrollY <= 3800){
            setName(false)
        }
        else{
            setName(true)
        }
    }
    window.addEventListener('scroll', iconsMotions);
  return (
    <div className='contact-container' id='contact'>
        <div className='contact'>
            <div className='contact-title'>
                <h1>Contact</h1>
            </div>
            <div className='contact-info'>
                <ul className={name ? 'contact-icon show' : 'icons-hide'}>
                    <li><a href='https://www.facebook.com/jethroalmodielslow' target='blank'><IoLogoFacebook  className='contact-icon'/>Facebook: Jethro Almodiel</a></li>
                    <li><a href='https://www.instagram.com/jethro_ui/' target='blank'><FaSquareInstagram  className='contact-icon'/>Instagram: jethro_ui</a></li>
                    <li><a href='https://www.linkedin.com/in/jethro-almodiel-a3a4b32b5/' target='blank'><FaLinkedin  className='contact-icon'/>LinkedIn: Jethro Almodiel</a></li>
                    <li><a href='#'><MdEmail className='contact-icon'/> Email: almodieljethro16@gmail.com</a></li>
                    <li><a href='#'><FaPhoneAlt  className='contact-icon'/>09662456030</a></li>
                </ul>
            </div>
            <div className='copyright'>
                <p>
                        &#169; Jethro Almodiel
                </p>
                <p> 2024</p>
            </div>
        </div>
    </div>
  )
}

export default Contact