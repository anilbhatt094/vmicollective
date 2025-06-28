"use client"
import React from 'react';
import {Image} from "@heroui/react";
import { Icon } from '@iconify/react';
const AreyouReady =()=>{
    return(
        <section className='py-[50px]'>
        <div className='container mx-auto px-2 md:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                
                <div className='order-2 md:order-1 text-center md:text-left'>
                    <h2 className='text-[#000000] leading-[60px] text-[40px] font-semibold'>Are you ready ? </h2>
                <p className='mt-5 text-[24px] font-normal leading-[45px]'>We are a collective of Global professionals who have successfully built businesses as entrepreneurs & and worked with Fortune 100 firms with over 500 man years of experience.</p>
               
               </div>

               <div className='order-1 md:order-2 flex justify-center'>
                <Image src="images/aretoready.png" className='md:h-[550px] h-[auto] mx-auto w-auto' alt="Are to ready"/>
                </div>
            </div>
        </div>
        </section>
    )
}
export default AreyouReady