import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import fb from './images/facebook-logo.png';
import linkedln from './images/linkedln.jpg';
import twitter from './images/twitter-logo.png';
import whatsapp from './images/whatsapp-logo.png';
import './Navbar.css'
import co from './images/co.jpg'

function Navbar() {
    return (
        <>
        
        <nav className='nav border shadow-sm'>
            <div className='container-fluid'>
                <div>
                    <img src={co} className='logo' />
                </div>
                <div className='menu'>
                    <div className='drop'>
                        <button className='dropdown-toggle'>About</button>
                        <ul class="dropdown-menu">
                            <li><a className='dropdown-item' href="#">Our Story</a></li>
                            <li><a className='dropdown-item' href="#">Our Team</a></li>
                        </ul>
                    </div>
                    <div className='drop'>
                        <button className='dropdown-toggle'>Programmes</button>
                        <ul class="dropdown-menu">
                            <li><a className='dropdown-item' href="#">National Innovation Diploma</a></li>
                            <li><a className='dropdown-item' href="#">Professional Diploma Program</a></li>
                            <li><a className='dropdown-item' href="#">Executive Professional Certificate Program</a></li>
                        </ul>
                    </div>
                    <div className='drop'>
                        <button className='dropdown-toggle'>Admissions</button>
                        <ul class="dropdown-menu">
                            <li><a className='dropdown-item' href="#">Apply for a Programme</a></li>
                            <li><a className='dropdown-item' href="#">Mode of Study</a></li>
                            <li><a className='dropdown-item' href="#">Tuition</a></li>
                            <li><a className='dropdown-item' href="#">Frequently Asked Questions</a></li>
                        </ul>
                    </div>
                    <div className='drop'>
                        <button className='dropdown-toggle'>E-Portal</button>
                        <ul class="dropdown-menu">
                            <li><a className='dropdown-item' href="#">Student</a></li>
                            <li><a className='dropdown-item' href="#">Staff</a></li>
                        </ul>
                    </div>
                    <div className='sqi-scholarship'>
                        <button className=''>SQI Scholarship</button>
                    </div>
                    <div className='news'>
                        <button className=''>News</button>
                    </div>
                </div>
            </div>
        </nav>
        <div className='position-absolute fix-logo1'>
                <div className='position-fixed s'>
                    <button className='fb'>
                        <img src={fb} alt="" className='fb-img' />
                    </button>
                </div>
            </div>
            <div className='position-absolute fix-logo2'>
                <div className='position-fixed s'>
                    <button className='twitter d-flex align-items-center justify-content-center'>
                        <img src={twitter} alt="" className='twitter-img' />
                    </button>
                </div>
            </div>
            <div className='position-absolute fix-logo3'>
                <div className='position-fixed s'>
                    <button className='linkedln d-flex align-items-center justify-content-center'>
                        <img src={linkedln} alt="" className='linkedln-img' />
                    </button>
                </div>
            </div>
            <div className='chat position-absolute'>
                <div className='position-fixed whatsapp-div rounded-circle d-flex align-items-center justify-content-center'>
                    <img src={whatsapp} alt="" className='whatsapp-img'/>
                <div className='position-absolute need-help px-2 rounded'>Need Help? Chat <b>with us</b></div>
                </div>
            </div>
        </>
    )
}

export default Navbar