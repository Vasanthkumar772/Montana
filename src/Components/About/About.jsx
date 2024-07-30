import React from 'react'
import './About.css'
import image1 from '../../Assetes/about1.webp'
import image2 from '../../Assetes/about2.webp'

const About = () => {
  return (
    <div className='Abouthead'>
        <div className='des'>
           
            <p className='head'>About us</p>
            <p className='bold'>A Luxuries Hotel with Nature </p>
            {/* <p className='bold'></p> */}
            <p className='para'>Suscipit libero pretium nullam potenti. Interdum, blandit</p>
            <p className='para'>phasellus consectetuer dolor ornare dapibus enim ut</p>
            <p className='para'>tincidunt rhoncus tellus sollicitudin pede nam maecenas,</p>
            <p className='para'>dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat</p>
            <p className='para'>facilisi faucibus et. Rhoncus.</p>
            <p className='learn'>Learn more</p>
       
        </div>
        <div className='image'>
            <div className='img1'>
                <img src={image1} alt="" />
            </div>
            <div className='img2'>
                <img src={image2} alt="" />
            </div>

        </div>


    </div>
  )
}

export default About