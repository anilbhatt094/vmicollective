"use client"
import React from 'react';
import {Image , Input , Button} from "@heroui/react";
import { Icon } from '@iconify/react';
const ContactUs =()=>{
    return (
      <section className="py-[50px] ">
        <div className="container mx-auto px-2 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-[#000000] text-center md:text-left leading-[60px] text-[40px] font-semibold mb-[30px]">
                Kindly Submit Your Details.
              </h2>
              <form>
                <Input
                  isRequired
                  type="text"
                  variant="bordered"
                  label="Full Name"
                  placeholder="Enter Full Name"
                  classNames={{
                    inputWrapper:
                      "bg-white h-[60px] mb-5 border-1 border-solid border-[#747474]",
                  }}
                />

                <Input
                  isRequired
                  type="number"
                  variant="bordered"
                  label="Phone Number"
                  placeholder="Enter Phone Number"
                  classNames={{
                    inputWrapper:
                      "bg-white h-[60px] mb-5 border-1 border-solid border-[#747474]",
                  }}
                />

                <Input
                  isRequired
                  type="email"
                  variant="bordered"
                  label="Email Id"
                  placeholder="Enter Email Id"
                  classNames={{
                    inputWrapper:
                      "bg-white h-[60px] mb-5 border-1 border-solid border-[#747474]",
                  }}
                />
                <Button className="bg-[#000000] text-white w-[200px] h-[60px] ">
                  Submit
                </Button>
              </form>
            </div>

            <div className="text-center order-1 md:order-2">
              <div className="flex justify-center items-center">
                <Image
                  src="images/contactus.png"
                  alt="Get In Touch"
                  className="md:h-[550px] h-[auto] mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default ContactUs