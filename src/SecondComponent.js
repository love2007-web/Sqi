import React from 'react'
import './SecondComponent.css'

function SecondComponent() {
  return (
    <div>
        <div className='container-fluid body'>
            <div className='content text-light my-5 mx-5'>
                <h3 className=''>SCICT AT A GLANCE</h3>
                <p>SQI College of ICT offers both <a href='#'>National Diploma</a> and <a href='#'>Professional Certificate programmes</a>.</p>
                <p>The diploma Certificate conforms with the standard National Diploma Certificate obtained in Polytechnics while the Professional certificate is the certificate you earn after taking a professional course here at SQI.</p>
                <p>You can use the Diploma certificate to seek admissions into the University through Direct Entry or for Higher National Diploma (HND). While the professional Certificate is recognized worldwide not as a degree but as a proof of having undergone professional training in the field for which the certificate is issued.</p>
                <button className='bg-transparent text-light my-2 px-4 py-3 btn btn-outline-light'>
                    Learn more
                </button>
            </div>
        </div>
    </div>
  )
}

export default SecondComponent