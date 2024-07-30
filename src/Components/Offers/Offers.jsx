import React from 'react'
import './Offers.css'
import { GoDotFill } from "react-icons/go";
import offer1 from '../../Assetes/offer1.webp'
import offer2 from '../../Assetes/offer2.webp'
import offer3 from '../../Assetes/offer3.webp'

const Offers = () => {
  return (
    <div className='offerhead'>
      <div className='offer'>
         <p>Our Offers</p>
         <h1>Ongoing Offers</h1> 
      </div>
      <div className='offerimg'>
        <div className='off1'>
          <img src={offer1} alt="" />
          <p className='hed'>Up to 35% savings on Club
          rooms and Suites</p>
          <div className='bulletin'>
          <div className="w3">
    <GoDotFill className='w4'/>
    <p className='p1'>Luxaries condition</p>
    </div>
    </div>
    <div className="w3">
    <GoDotFill className='w4' />
     <p className='p1'>3 Adults & 2 Children size</p>
    </div>
    <div className="w3">
    <GoDotFill className='w4'/>
     <p className='p1'>Sea view side</p>
    </div>
    <div className='butt'>
    <button>Book Now</button>

    </div>

            
          </div>
          <div className='off1'>
          <img src={offer2} alt="" />
          <p className='hed'>Up to 35% savings on Club
          rooms and Suites</p>
          <div className='bulletin'>
          <div className="w3">
    <GoDotFill className='w4'/>
    <p className='p1'>Luxaries condition</p>
    </div>
    </div>
    <div className="w3">
    <GoDotFill className='w4' />
     <p className='p1'>3 Adults & 2 Children size</p>
    </div>
    <div className="w3">
    <GoDotFill className='w4'/>
     <p className='p1'>Sea view side</p>
    </div>
    <div className='butt'>
    <button>Book Now</button>

    </div>

            
          </div>
          <div className='off1'>
          <img src={offer3} alt="" />
          <p className='hed'>Up to 35% savings on Club
          rooms and Suites</p>
          <div className='bulletin'>
          <div className="w3">
    <GoDotFill className='w4'/>
    <p className='p1'>Luxaries condition</p>
    </div>
    </div>
    <div className="w3">
    <GoDotFill className='w4' />
     <p className='p1'>3 Adults & 2 Children size</p>
    </div>
    <div className="w3">
    <GoDotFill className='w4'/>
     <p className='p1'>Sea view side</p>
    </div>
    <div className='butt'>
    <button>Book Now</button>

    </div>

            
          </div>

        </div>

      </div>
  )
}

export default Offers