"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';
import {Image} from "@heroui/react";
const MainBanner=()=>{

    function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    
    <Icon icon="la:angle-right" width="50" height="50" className="text-white bg-black rounded-[5px] right-[10px] absolute" 
      onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icon
      icon="la:angle-left"
      className="text-white bg-black rounded-[5px] absolute left-[10px]"
      width="50"
      height="50"
      onClick={onClick}
    />
  );
}


     var settings = {
    dots: true,
    swipeToSlide: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

    return(
       
      
      <Slider {...settings}>
      <div>
      <Image src="/images/banner/banner-1.jpg" alt="banner" className="w-full h-full object-cover rounded-none" />

      </div>
   
     
    </Slider>
      
    )
}

export default MainBanner;