"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';
const Outcomes =()=>{

     function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        
        <Icon icon="la:angle-right" width="50" height="50" className="text-white bg-black rounded-[5px] right-[10px] md:right-[-10px] z-[9] absolute top-[35%] cursor-pointer" 
          onClick={onClick} />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <Icon
          icon="la:angle-left"
          className="text-white bg-black rounded-[5px] absolute left-[10px] md:left-[-10px] z-[9] top-[35%] cursor-pointer"
          width="50"
          height="50"
          onClick={onClick}
        />
      );
    }
    
    



      var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll:1,
    initialSlide: 0,
      nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
      <>
        <div className="py-[50px] bg-[#f5f5f5]">
          <div className="container mx-auto">
            <div className="text-center">
              <h3 className="text-[#000000] leading-[60px] text-[40px] font-semibold mb-5">
                <span className="text-[#bb0000]">Outcomes</span> in Everything
                we do{" "}
              </h3>
              <p>Iterative , Co-created, Simple to Understand & Communicate</p>
            </div>

            <Slider {...settings} className="customSlickSlider mt-[30px]">
              <div className="border-1 border-solid border-[#bb0000] p-5 h-[200px] bg-[#ffffff] !flex items-center justify-center">
                <p className="text-[18px] text-black leading-[30px] text-center">
                  Strategy & Gotomarket
                </p>
              </div>

              <div className="border-1 border-solid border-[#bb0000] p-5 h-[200px] bg-[#ffffff] !flex items-center justify-center">
                <p className="text-[18px] text-black leading-[30px] text-center">
                  Enablement & Performance Enhancement
                </p>
              </div>

              <div className="border-1 border-solid border-[#bb0000] p-5 h-[200px]  bg-[#ffffff] !flex items-center justify-center">
                <p className="text-[18px] text-black leading-[30px] text-center">
                  Digital Innvoation & Technology
                </p>
              </div>

              <div className="border-1 border-solid border-[#bb0000] p-5  h-[200px] bg-[#ffffff] !flex items-center justify-center">
                <p className="text-[18px] text-black leading-[30px] text-center">
                  Change & Program Management
                </p>
              </div>

              <div className="border-1 border-solid border-[#bb0000] p-5  h-[200px] bg-[#ffffff] !flex items-center justify-center">
                <p className="text-[18px] text-black leading-[30px] text-center">
                  People, Talent Acquisition & Experinces
                </p>
              </div>

              <div className="border-1 border-solid border-[#bb0000] p-5 h-[200px] bg-[#ffffff] !flex items-center justify-center">
                <p className="text-[18px] text-black leading-[30px] text-center">
                  Market Access & Expansion
                </p>
              </div>

              <div className="border-1 border-solid border-[#bb0000] p-5 h-[200px] bg-[#ffffff] !flex items-center justify-center">
                <p className="text-[18px] text-black leading-[30px] text-center">
                  How do we offer Faster, Cheaper, Better alternatives in
                  digital first marketplace.
                </p>
              </div>

              <div className="border-1 border-solid border-[#bb0000] p-5 h-[200px] bg-[#ffffff] !flex items-center justify-center">
                <p className="text-[18px] text-black leading-[30px] text-center">
                  Not every Innovation needs to be distruptive, however there is
                  no progress without innovation.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </>
    );
}

export default Outcomes