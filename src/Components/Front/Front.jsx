import React, { useState } from 'react';
import './Front.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import logo from '../../Assetes/logo.png.webp';
import { FaFacebookSquare, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";

const Front = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          <img src={logo} alt="Montana Resort" />
        </div>
        <div className='nav4'>
          <FaFacebookSquare />
          <FaTwitter />
          <FaInstagram />
        </div>
        <div className='nav5'>
          <button>Book A Room</button>
        </div>
        <div className='burger-menu' onClick={toggleMenu}>
          <FaBars />
          <span>MENU</span>
        </div>
      </div>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
       <div className="vrk1">
       <p>Home</p>
        <p>Rooms</p>
        <p>About</p>
        <p>Blog</p>
        <p>Pages</p>
        <p>Contact</p>
        <button>Book A Room</button>
       </div>
      </div>
      <Swiper
        rewind={true}
        navigation={false}
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
  );
}

export default Front;
