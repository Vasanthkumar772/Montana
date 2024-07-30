import React from 'react'
import './Front.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import logo from '../../Assetes/logo.png.webp'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Front = () => {
  return (
    <div className='full'>
        <div className='nav1'>
            <div className='nav2'>
            <p>Home</p>
            <p>Rooms</p>
            <p>About</p>
            <p>Blog</p>
            <p>Pages</p>
            <p>Contact</p>
            </div>
            <div className='nav3'>
                <img src={logo} alt="" />

            </div>
            <div className='nav4'>
            <FaFacebookSquare />
            <FaTwitter />
            <FaInstagram />
            </div>
            <div className='nav5'>
            <button>Book A Room</button>

            </div>
            


        </div>
        <Swiper
        rewind={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='fs'>
          <div className='fss'>
            <div className='ps'>
            <p className='fss1'>Montana Resort</p>
            <p className='fss2'>Unlock to enjoy the view of Martine</p>
            </div>
           

          </div>
        </SwiperSlide>
        <SwiperSlide className='fs'>
        <div className='fss3'>
            <div className='ps'>
            <p className='fss1'>Life Is Beautiful</p>
            <p className='fss2'>Unlock to enjoy the view of Martine</p>
            </div>
           

          </div>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Front