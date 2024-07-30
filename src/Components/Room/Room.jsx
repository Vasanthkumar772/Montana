import React from 'react'
import './Room.css'
import Room1 from '../../Assetes/Room1.webp'
import Room2 from '../../Assetes/Room2.webp'
import Room3 from '../../Assetes/Room3.webp'
import Room4 from '../../Assetes/Room4.webp'

const Room = () => {
  return (
    <div className='Roomhead'>
        <div className='room1'>
         <p>Featured Rooms</p>
         <h1>Choose a Better Room</h1> 
      </div>
      <div className='room2'>
        <div className='room3'>
           <div className="ki1">
           <img src={Room1} alt="" />
           
           </div>
           <div className="ki2">
           <img src={Room2} alt="" />
           </div>
        </div>
        <div className='room3'>
          <div className="ki3">
          <img src={Room3} alt="" />
          </div>
          <div className="ki4">
          <img src={Room4} alt="" />
          </div>
        </div>

      </div>

      <div className='room4'>
        <p className='r1'>From $250/night</p>
        <p className='r2'>Superior Room</p>
      </div>
      <div className='room5'>
        <p className='r3'>From $250/night</p>
        <p className='r4'>Deluxe Room</p>
      </div>
      <div className='room6'>
        <p className='r5'>From $250/night</p>
        <p className='r6'>Signature Room</p>
      </div>
      <div className='room7'>
        <p className='r7'>From $250/night</p>
        <p className='r8'>Couple Room</p>
      </div>
      {/* <p className='o1'></p>
      <p className='o2'></p>
      <p className='o3'></p>
      <p className='o4'></p> */}

    </div>
  )
}

export default Room