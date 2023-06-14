import React from 'react'
import google from './images/google.png'
import interswitch from './images/Interswitch.png'
import andela from './images/Andela-log-landscape-blue-400px.png'
import microsoft from './images/Microsoft_logo.png'
import paystack from './images/Paystack.png'
import brewery from './images/brewery.png'
import wema from './images/Wema-Bank-Logo.png'
import creditclan from './images/clan-logo.png'
import edozzier from './images/edozzier.png'
import moneymie from './images/moneymie.png'
import army from './images/Nigerian_Army.png'
import aella from './images/aella-credit.png'
import './ThirdComponent.css'

function ThirdComponent() {
  return (
    <>
    <div className='content-3'>
        <div className='alumni-div mx-auto py-5'>
            <h2 className='w-50'>Our alumni work at world-class companies around the world including</h2>
        </div>
        <div className='partner-div mx-auto d-flex align-items-center flex-wrap'>
            <div className='pt-2 pb-4 p-img-div ms-5'>
                <img src={google} alt="" className='p-img w-100'/>
            </div>
            <div className='pt-2 pb-4 p-img-div'>
                <img src={interswitch} alt="" className='p-img w-100'/>
            </div>
            <div className='pt-2 pb-4 p-img-div'>
                <img src={andela} alt="" className='p-img w-100'/>
            </div>
            <div className='pt-2 pb-4 p-img-div4'>
                <img src={microsoft} alt="" className='p-img w-100'/>
            </div>
            <div className='py-4 p-img-div ms-5'>
                <img src={paystack} alt="" className='p-img w-100'/>
            </div>
            <div className='py-4 p-img-div'>
                <img src={brewery} alt="" className='p-img w-100'/>
            </div>
            <div className='py-4 p-img-div'>
                <img src={wema} alt="" className='p-img w-100'/>
            </div>
            <div className='py-4 p-img-div4'>
                <img src={creditclan} alt="" className='p-img w-100'/>
            </div>
            <div className='pt-4 pb-2 p-img-div ms-5'>
                <img src={edozzier} alt="" className='p-img w-100'/>
            </div>
            <div className='pt-4 pb-2 p-img-div'>
                <img src={moneymie} alt="" className='p-img w-100'/>
            </div>
            <div className='pt-4 pb-2 p-img-div'>
                <img src={army} alt="" className='p-img w-100'/>
            </div>
            <div className='pt-4 pb-2 p-img-div4'>
                <img src={aella} alt="" className='p-img w-100'/>
            </div>
        </div>
    </div>
</>
  )
}

export default ThirdComponent