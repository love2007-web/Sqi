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
                            <li><a className='dropdown-item' href="#">Action</a></li>
                            <li><a className='dropdown-item' href="#">Another action</a></li>
                            <li><a className='dropdown-item' href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className='drop'>
                        <button className='dropdown-toggle'>Programmes</button>
                        <ul class="dropdown-menu">
                            <li><a className='dropdown-item' href="#">Action</a></li>
                            <li><a className='dropdown-item' href="#">Another action</a></li>
                            <li><a className='dropdown-item' href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className='drop'>
                        <button className='dropdown-toggle'>Admissions</button>
                        <ul class="dropdown-menu">
                            <li><a className='dropdown-item' href="#">Action</a></li>
                            <li><a className='dropdown-item' href="#">Another action</a></li>
                            <li><a className='dropdown-item' href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className='drop'>
                        <button className='dropdown-toggle'>E-Portal</button>
                        <ul class="dropdown-menu">
                            <li><a className='dropdown-item' href="#">Action</a></li>
                            <li><a className='dropdown-item' href="#">Another action</a></li>
                            <li><a className='dropdown-item' href="#">Something else here</a></li>
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