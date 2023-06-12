import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './Navbar.css'
import co from './co.jpg'

function Navbar() {
    return (
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
    )
}

export default Navbar