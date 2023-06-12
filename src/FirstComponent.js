import React from 'react'
import './FirstComponent.css'
import sqimodel from './sqimodel.png'

function FirstComponent() {
  return (
    <div className='container'>
        <div className='d-flex'>
            <div className='left'>
                <div className='wrapper'>
                    <h1>
                        Study to become a global talent
                    </h1>
                    <p>
                        Learn new tech skills using world-class curriculum and top industry experts.
                    </p><br/>
                    <button>
                        Start Now
                    </button>
                </div>
            </div>
            <div className='right'>
                <img src={sqimodel}/>
            </div>
        </div>
    </div>
  )
}

export default FirstComponent