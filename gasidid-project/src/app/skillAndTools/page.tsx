'use client';

import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from "next//image";

// Import the JSON data
import dbManagement from './dbManagement.json'; // Ensure this path is correct
// import back from './back.json';
import deepLearning from './deepLeaning.json';
import front from './front.json';


const back = [
  {
    "title": "Springboot",
    "pic": "/imgSlide/springboot.png"
  },
  {
    "title": "NodeJS",
    "pic": "/imgSlide/nodejs.png"
  },
  {
    "title": "GOFiber",
    "pic": "/imgSlide/gofiber.png"
  },
  {
    "title": "Flask",
    "pic": "/imgSlide/flask.png"
  },
  {
    "title": "expressjs",
    "pic": "/imgSlide/expressjs.png"
  }
]  

export default function SkillTools() {
  return (
    <div className="h-fullscreen w-fullscreen m-8 grid grid-cols-2 grid-rows-4 gap-4 flex justify-center items-center">


  <div className="flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center">
            <div className="h-62 w-5/6 flex flex-col justify-center items-center">
              {/* <div className="flex items-center"> 
                <span className="text-5xl font-bold text-gray-500	">&#x2022;</span> <span className="ml-2 text-3xl font-medium mb-2">Back-end Frameworks</span>
              </div> */}
              <Swiper
                spaceBetween={0}
                slidesPerView={4}
                autoplay={{
                  delay: 1000,
                }}
                pagination={{
                  clickable: true, // Make pagination dots clickable
                }}
                // Removed the navigation prop to hide arrows
                modules={[Autoplay, Pagination]}
                className="bg-white rounded-xl drop-shadow-xl shadow-black-800"
              >

        <SwiperSlide><div className="bg-red-200 h-40 w-40 ">hell world</div></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>




              </Swiper>
            </div>
          </div>
        </div>



      





    </div>
  );
}

function slidePlay(){
  {back.map((item, index) => (
    <SwiperSlide key={index} className="flex flex-col justify-center items-center">
      {console.log(back)}
      {/* Render image if pic exists */}
      {item.pic && (
        <div className="w-36 h-36 flex justify-center items-center bg-red-200">
          <Image src={item.pic} alt={item.title} className="object-contain" width={100} height={100} />
        </div>
      )}
      <p className="text-xl mt-8 font-normal">{item.title}</p>
    </SwiperSlide>
  ))}
}
