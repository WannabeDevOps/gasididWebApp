'use client';

import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image'; // Import Image from 'next/image'

// Import the JSON data
import dbManagement from './dbManagement.json'; // Ensure this path is correct

export default function SkillTools() {
  return (
    <div className="h-fullscreen w-fullscreen  m-8 grid grid-cols-2 grid-rows-4 gap-4 flex justify-center items-center">
      <div className=" flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="h-62 w-5/6 flex flex-col m-4 ">
            <span className="text-3xl font-medium mb-2"> &#x2022; Database Management</span>
            <Swiper
              spaceBetween={30}
              slidesPerView={4} // Show 4 slides at a time
              centeredSlides={false} // Disable centering since we are showing multiple slides
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true, // Make pagination dots clickable
                dynamicBullets: true, // Optionally add dynamic bullets
              }}
              // Removed the navigation prop to hide arrows
              modules={[Autoplay, Pagination]}
              className="bg-white rounded-xl shadow-2xl shadow-black-900"
            >
              {dbManagement.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-center items-center">
                    {/* Render image if pic exists */}
                    {item.pic && (
                      <Image src={item.pic} alt={""} className="" height={80} width={90} layout="responsive"/>
                    )}
                    <p className="text-xl">{item.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="h-62 w-5/6 flex flex-col m-4 ">
            <span className="text-3xl font-medium mb-2"> &#x2022; Database Management</span>
            <Swiper
              spaceBetween={30}
              slidesPerView={4} // Show 4 slides at a time
              centeredSlides={false} // Disable centering since we are showing multiple slides
              autoplay={{
                delay: 1000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true, // Make pagination dots clickable
                dynamicBullets: true, // Optionally add dynamic bullets
              }}
              // Removed the navigation prop to hide arrows
              modules={[Autoplay, Pagination]}
              className="bg-white rounded-xl shadow-2xl shadow-black-900 h-80"
            >
              {dbManagement.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col justify-center items-center bg-red-200 w-full ">
                    {/* Render image if pic exists */}
                    {item.pic && (
                      <Image src={item.pic} alt={""} className="w-8 object-cover rounded-lg" height={80} width={90} layout="responsive"/>
                    )}
                    <p className="text-xl">{item.title}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      
    </div>
  );
}
