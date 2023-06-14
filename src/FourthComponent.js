import React from 'react'
import sqigraduate from './images/sqi-graduate1.jpg'
import './FourthComponent.css'

function FourthComponent() {
  return (
    <>
    <div className='content-4'>
        <div className='d-flex align-items-center'>
            <div className='s4-img'>
                <img src={sqigraduate} alt="" className='w-100' />
            </div>
            <div className='s4-text'>
                <h2>Making Africa a Tech Continent…</h2>
                <p>We focus on quality teaching, learning and training to the globally acceptable productivity standard in accordance with the requirements of the industry, for which necessary research and preparation of courses are ensured to make industry-ready professionals.</p>
                <p>SQI College of ICT is closely watching the interaction of industry and academia, getting feedback from our industry partners to provide the needed training while concentrating to contribute industry needed professionals in a very flexible study structure.</p>
            </div>
        </div>
    </div>
</>
  )
}

export default FourthComponent