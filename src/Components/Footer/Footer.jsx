import React from 'react'
import './Footer.css'
import F1 from '../../Assetes/f1.webp'
import F2 from '../../Assetes/f2.webp'
import F3 from '../../Assetes/f3.webp'
import F4 from '../../Assetes/f4.webp'
import F5 from '../../Assetes/f5.webp'

const Footer = () => {
  return (
    <div className='Footerhead'>
        <div className='res'>
            <p>For Reservation or Query?</p>
            <button>+10 786 452 9671</button> 
        </div>
        <div className='ima'>
            <div className='imf1'>
            <img src={F1} alt="" />
            </div>
            <div className='imf1'>
                <img src={F2} alt="" />
            </div>
            <div className="imf1">
                <img src={F3} alt="" />
            </div>
            <div className='imf1'>
                <img src={F4} alt="" />
            </div>
            <div className='imf1'>
                <img src={F5} alt="" />
            </div>


        </div>

    </div>
  )
}

export default Footer