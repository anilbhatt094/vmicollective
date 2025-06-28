"use client"
import React from 'react';
import {Image} from "@heroui/react";
import { Icon } from '@iconify/react';
const CapitalizeOn =()=>{
    return (
      <section className="py-[50px] bg-[#f5f5f5]">
        <div className="container mx-auto px-2 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
           
            <div className="text-center">
             
              <div className="flex justify-center items-center">
                <Image
                  src="images/innovation.png"
                  alt="Capitalize on Innovation"
                  className="md:h-[550px] h-[auto] mx-auto "
                />
              </div>
            </div>

            <div className="">
              <h2 className="text-[#000000] text-center md:text-left leading-[60px] text-[40px] font-semibold">
                Capitalize on{" "}
                <span className="text-[#bb0000]">Transitions</span>
              </h2>
              <ul className="mt-5">
                <li className="text-[24px] font-normal leading-[35px] mb-5 relative pl-[35px]">
                  <Icon
                    icon="mdi-light:pencil"
                    width="30"
                    height="30"
                    className="absolute top-0 left-0 top-[5px] text-[#bb0000]"
                  />{" "}
                  Start with why.{" "}
                </li>
                <li className="text-[24px] font-normal leading-[35px] mb-5 relative pl-[35px]">
                  <Icon
                    icon="mdi-light:pencil"
                    width="30"
                    height="30"
                    className="absolute top-0 left-0 top-[5px] text-[#bb0000]"
                  />{" "}
                  How does it help us achieve short, medium & long-term
                  goals?{" "}
                </li>
                <li className="text-[24px] font-normal leading-[35px] mb-5 relative pl-[35px]">
                  <Icon
                    icon="mdi-light:pencil"
                    width="30"
                    height="30"
                    className="absolute top-0 left-0 top-[5px] text-[#bb0000]"
                  />{" "}
                 We are in a AI age, what will be our roadmap to not just be ready, but drive innovation and success using technologies.
                </li>
              </ul>
            </div>

           
          </div>
        </div>
      </section>
    );
}
export default CapitalizeOn