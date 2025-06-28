"use client"
import React from 'react';
import {Image} from "@heroui/react";
import { Icon } from '@iconify/react';
const CrateSustainable =()=>{
    return (
      <section className="py-[50px]">
        <div className="container mx-auto px-2 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-[#000000] text-center md:text-left leading-[60px] text-[40px] font-semibold">
                Create Sustainable{" "}
                <span className="text-[#bb0000]">Impact</span>
              </h2>
              <ul className="mt-5">
                <li className="text-[24px] font-normal leading-[35px] mb-5 relative pl-[35px]">
                  <Icon
                    icon="mdi-light:pencil"
                    width="30"
                    height="30"
                    className="absolute top-0 left-0 top-[5px] text-[#bb0000]"
                  />{" "}
                  Positive behaviour across - customers, employees &
                  Eco-System{" "}
                </li>
                <li className="text-[24px] font-normal leading-[35px] mb-5 relative pl-[35px]">
                  <Icon
                    icon="mdi-light:pencil"
                    width="30"
                    height="30"
                    className="absolute top-0 left-0 top-[5px] text-[#bb0000]"
                  />{" "}
                  Change is not an event, it's a continuous, programmed set of
                  collective actions.{" "}
                </li>
                <li className="text-[24px] font-normal leading-[35px] mb-5 relative pl-[35px]">
                  <Icon
                    icon="mdi-light:pencil"
                    width="30"
                    height="30"
                    className="absolute top-0 left-0 top-[5px] text-[#bb0000]"
                  />{" "}
                  We need to see both outside the box, inside the box & extend
                  the box.{" "}
                </li>
              </ul>
            </div>

            <div className="text-center order-1 md:order-2">
              <div className="text-center">
                <p className="text-[#000000] text-[35px] mb-5">
                  Success = Happiness
                </p>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="images/sustainable.png"
                  alt="Create Sustainable"
                  className="md:h-[550px] h-[auto] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default CrateSustainable