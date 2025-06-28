"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from '@iconify/react';
import {Image} from "@heroui/react";
const PathtoSolution=()=>{

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


    return(
       <div className="py-[50px] bg-[#f5f5f5]">
        <div className="container mx-auto">
        <div className="text-center">
        <h3 className="text-[#000000] leading-[60px] text-[40px] font-semibold mb-[50px]">Path to Solution starts  with identifying the problem</h3>
        </div>
      
      <Slider {...settings} className="customSlickSlider">
      <div className="border-1 border-solid border-[#747474] p-5 h-[250px] bg-[#ffffff]">
        <p className="text-[18px] text-black leading-[30px] text-center">The Budgets are shifting to different Decision Makers, as are the ways people are consuming our products & services.</p>

      
        </div>

        <div className="border-1 border-solid border-[#747474] p-5 h-[250px] bg-[#ffffff]">
        <p className="text-[18px] text-black leading-[30px] text-center">It's all about Customer Relevance & Impact... Right now er are limited more by our Imagination than by our Portfolio.</p>

      
        </div>

        <div className="border-1 border-solid border-[#747474] p-5 h-[250px] bg-[#ffffff]">
        <p className="text-[18px] text-black leading-[30px] text-center">Employees & Customers want more Shared Purpose in their Lives... We should do a better job at providing that</p>

      
        </div>

        <div className="border-1 border-solid border-[#747474] p-5 h-[250px] bg-[#ffffff]">
        <p className="text-[18px] text-black leading-[30px] text-center">We need to engage differently and start having stronger Business & Financial Conversations.</p>

      
        </div>

        <div className="border-1 border-solid border-[#747474] p-5 h-[250px] bg-[#ffffff]">
        <p className="text-[18px] text-black leading-[30px] text-center">Digital Transformation is hard! how do we demonstrate the value.</p>

      
        </div>

        <div className="border-1 border-solid border-[#747474] p-5 h-[250px] bg-[#ffffff]">
        <p className="text-[18px] text-black leading-[30px] text-center">How do we take advantage of emerging markets growth opportunities.</p>

      
        </div>

        <div className="border-1 border-solid border-[#747474] p-5 h-[250px] bg-[#ffffff]">
        <p className="text-[18px] text-black leading-[30px] text-center">How do we offer Faster, Cheaper, Better alternatives in digital first marketplace.</p>

      
        </div>

        <div className="border-1 border-solid border-[#747474] p-5 h-[250px] bg-[#ffffff]">
        <p className="text-[18px] text-black leading-[30px] text-center">Not every Innovation needs to be distruptive, however there is no progress without innovation.</p>

      
        </div>
     
    </Slider>
    </div>
    </div>
      
    )
}

export default PathtoSolution;