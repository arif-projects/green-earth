import React from 'react';
import './Banner.css'
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
    return (
        <div className = "banner mb-5">
        <div className="banner-title text-start">
         <h1><span>Order</span> Online <br /><span>Save Your</span> <br />Time</h1>
         
         <button className = "banner-button">Order now <BsArrowRight/> </button>
         
         
        </div>
        <div className="banner-image">
          <img src={'https://i.ibb.co/ncCf7mk/f3-1.png'} alt="" />
        </div>

    </div>
    );
};

export default Banner;