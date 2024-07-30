import React from 'react'
import './Food.css'
import Food1 from '../../Assetes/Food1.webp'
import Food2 from '../../Assetes/Food2.webp'

const Food = () => {
  return (
    <div className='Foodhead'>
        <div className='foodimg'>
           <div className='fd1'>
               <img src={Food1} alt="" />
           </div>
           <div className='fd2'>
               <img src={Food2} alt="" />
           </div>

       </div>
        <div className='fdes'>
           
           <p className='df'>Delicious Food</p>
           <p className='fb'>We Serve Fresh and
           Delicious Food</p>
           {/* <p className='bold'></p> */}
           <p className='fpara'>Suscipit libero pretium nullam potenti. Interdum, blandit</p>
           <p className='fpara'>phasellus consectetuer dolor ornare dapibus enim ut</p>
           <p className='fpara'>tincidunt rhoncus tellus sollicitudin pede nam maecenas,</p>
           <p className='fpara'>dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat</p>
           <p className='fpara'>facilisi faucibus et. Rhoncus.</p>
           <p className='flearn'>Learn more</p>
      
       </div>
       
    </div>
  )
}

export default Food