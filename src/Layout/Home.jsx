import React from 'react'
import Front from '../Components/Front/Front'
import About from '../Components/About/About'
import Offers from '../Components/Offers/Offers'
import Video from '../Components/Video/Video'
import Food from '../Components/Food/Food'
import Room from '../Components/Room/Room'
import Footer from '../Components/Footer/Footer'
import Endfooter from '../Components/Endfooter/Endfooter'

const Home = () => {
  return (
    <div>
        <Front/>
        <About/>
        <Offers/>
        <Video/>
        <Food/>
        <Room/>
        <Footer/>
        <Endfooter/>
    </div>
  )
}

export default Home