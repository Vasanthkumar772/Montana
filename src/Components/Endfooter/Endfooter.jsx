import React from 'react';
import './Endfooter.css';

const Footer = () => {
  return (
    <div className="footer">
    <div className="fot">
        <div className="fot1">
            <h2>
            ADDRESS
            </h2>
            <div className="fot2">
            <p>200, Green road, Mongla,
            New Yor City USA</p>
            </div>
            <div className="fot2">
            <p> (+1) 96 716 6879</p>
            </div>
            <div className="fot2">
            <p>contact@site.com</p>
            </div>
        </div>
        <div className="fot4">
           <h2>RESERVATION</h2>
           <div className="fot3">
            <p>+10 367 267 2678
            </p>
            <p>reservation@montana.com</p>
           </div>
        </div>
        <div className="fot4">
           <h2>NAVIGATION</h2>
           <div className="fot3">
            <p>Home</p>
            <p>Rooms</p>
            <p>About</p>
            <p>News</p>
           </div>
        </div>

    </div>
    
    </div>
  );
};

export default Footer;