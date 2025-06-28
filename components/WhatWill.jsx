"use client"
import React from 'react';
import {Image} from "@heroui/react";
import { Icon } from '@iconify/react';
const WhatWill =()=>{
    return(
        <section className='py-[50px]'>
        <div className='container mx-auto px-2 md:px-0'>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
                <div className=''>
                   
                <Image src="images/achive.png" alt="Achive Today"/>
                </div>
                <div className=''>
                    <h2 className='text-[#000000] leading-[60px] text-[40px] font-semibold text-center md:text-left'>What will you like to <span className='text-[#bb0000]'>Achive</span> today ? </h2>
                <ul className='mt-5'>
                    <li className='text-[24px] font-normal leading-[35px] mb-5 relative pl-[35px]'><Icon icon="mdi-light:pencil" width="30" height="30" className='absolute top-0 left-0 top-[5px] text-[#bb0000]'  /> Drive Innovation, new services & delivery models ? </li>
                    <li className='text-[24px] font-normal leading-[35px] mb-5 relative pl-[35px]'><Icon icon="mdi-light:pencil" width="30" height="30" className='absolute top-0 left-0 top-[5px] text-[#bb0000]'  /> Create a high-performing team & ecosystem ? </li>
                    <li className='text-[24px] font-normal leading-[35px] mb-5 relative pl-[35px]'><Icon icon="mdi-light:pencil" width="30" height="30" className='absolute top-0 left-0 top-[5px] text-[#bb0000]'  /> Scale with speed globally ? </li>
                    <li className='text-[24px] font-normal leading-[35px] mb-5 relative pl-[35px]'><Icon icon="mdi-light:pencil" width="30" height="30" className='absolute top-0 left-0 top-[5px] text-[#bb0000]'  /> Create a technology-led sustainable competitive advantage ?  </li>
                </ul>
               </div>
            </div>
        </div>
        </section>
    )
}
export default WhatWill