"use client"
import React, { Fragment, useState } from "react";
import {Image , Link} from "@heroui/react";
import { Icon } from '@iconify/react';
const Header =()=>{
  const [isMenu , setMenu] = useState(false)
  const handleMenuClick =()=>{
     setMenu(!isMenu); 
  }
    return (
      <Fragment>
        <div className="bg-[#000000] py-2 text-white flex justify-center items-center px-5">
          <p className="text-[#ffffff] text-[14px]">
            Welcome to VMI Collective
          </p>
        </div>
        <header>
          <div className="container mx-auto">
            <div className="flex justify-between items-center py-2 px-5">
              <Image src="logo.png" alt="VMI Collective" className="md:h-[80px] h-[50px]" />


              <div className={`md:static fixed right-0 top-0 md:w-auto w-[90%] h-[100vh] md:h-[auto] bg-white z-[99] px-5 md:px-0 pt-[50px] md:pt-0 ${isMenu ? 'block ':'hidden md:block '}`} >
               <Icon onClick={handleMenuClick}  icon="material-symbols-light:close-rounded" width="50" height="50" className="absolute right-[20px] top-[20px] block md:hidden" />
              <ul className="md:flex items-center gap-[30px]">
                <li className="mb-5 md:mb-0">
                  <Link href="" className="text-[18px] font-semibold hover:text-[#bb0000]  text-black">
                    Home
                  </Link>
                </li>
                <li className="mb-5 md:mb-0">
                  <Link href="" className="text-[18px] font-semibold  hover:text-[#bb0000] text-black">Who We Are</Link>
                </li>
                <li className="mb-5 md:mb-0">
                  <Link href="" className="text-[18px] font-semibold  hover:text-[#bb0000] text-black">Our Services</Link>
                </li>
                <li className="mb-5 md:mb-0">
                  <Link href="" className="text-[18px] font-semibold  hover:text-[#bb0000] text-black">Impact</Link>
                </li>
                <li className="mb-5 md:mb-0">
                  <Link href="" className="text-[18px] font-semibold  hover:text-[#bb0000] text-black">Contact</Link>
                </li>
              </ul>
              </div>

              <Icon onClick={handleMenuClick} icon="material-symbols-light:menu-rounded" width="50" height="50" className="cursor-pointer md:hidden" />
            </div>
          </div>
        </header>
      </Fragment>
    );
    
}

export default Header;