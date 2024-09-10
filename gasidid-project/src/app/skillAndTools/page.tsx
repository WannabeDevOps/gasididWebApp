'use client';

import 'swiper/css';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Import the JSON data
import dbManagement from './dbManagement.json'; // Ensure this path is correct
import back from './back.json';
import deepLearning from './deepLeaning.json';
import front from './front.json';

export default function SkillTools() {
  return (
    <div className="h-fullscreen w-fullscreen m-8 grid grid-cols-2 grid-rows-4 gap-4 flex justify-center items-center">

      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="h-62 w-5/6 flex flex-col m-4">
          <div className="flex items-center">
            <span className="text-5xl font-bold text-gray-500	">&#x2022;</span> <span className="ml-2 text-3xl font-medium mb-2">Database Management</span>
          </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={4} // Show 4 slides at a time
              centeredSlides={false} // Disable centering since we are showing multiple slides
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                stopOnLastSlide: false,  // Ensure autoplay continues after the last slide
                waitForTransition: false,  // Disable waiting for transitions to complete
              }}
              pagination={{
                clickable: true, // Make pagination dots clickable
                dynamicBullets: false, // Optionally add dynamic bullets
              }}
              // Removed the navigation prop to hide arrows
              modules={[Autoplay, Pagination]}
              className="bg-white rounded-xl drop-shadow-xl shadow-black-800"
            >
              {dbManagement.map((item, index) => (
                <SwiperSlide key={index} className="flex flex-col justify-center items-center">
                  {/* Render image if pic exists */}
                  {item.pic && (
                    <div className="w-24 h-24 flex justify-center items-center">
                      <Image
                        src={item.pic}
                        alt={item.title}
                        className="object-cover rounded-lg"
                        width={100} // Adjust width to fit container
                        height={100} // Adjust height to fit container
                        layout="intrinsic" // Use intrinsic layout to avoid layout shift
                      />
                    </div>
                  )}
                  <p className="text-xl mt-8 font-normal">{item.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>


{/* 2 */}


<div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="h-62 w-5/6 flex flex-col m-4">
          <div className="flex items-center">
            <span className="text-5xl font-bold text-gray-500	">&#x2022;</span> <span className="ml-2 text-3xl font-medium mb-2">Back-end Frameworks</span>
          </div>
            <Swiper
              spaceBetween={100}
              slidesPerView={5} // Show 4 slides at a time
              centeredSlides={true} // Disable centering since we are showing multiple slides
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                stopOnLastSlide: false,  // Ensure autoplay continues after the last slide
                waitForTransition: false,  // Disable waiting for transitions to complete
              }}
              pagination={{
                clickable: true, // Make pagination dots clickable
                dynamicBullets: false, // Optionally add dynamic bullets
              }}
              // Removed the navigation prop to hide arrows
              modules={[Autoplay, Pagination]}
              className="bg-white rounded-xl drop-shadow-xl shadow-black-800"
            >
              {back.map((item, index) => (
                <SwiperSlide key={index} className="flex flex-col justify-center items-center">
                  {/* Render image if pic exists */}
                  {item.pic && (
                    <div className="w-24 h-24 flex justify-center items-center">
                      <Image
                        src={item.pic}
                        alt={item.title}
                        className="object-cover rounded-lg"
                        width={100} // Adjust width to fit container
                        height={100} // Adjust height to fit container
                        layout="intrinsic" // Use intrinsic layout to avoid layout shift
                      />
                    </div>
                  )}
                  <p className="text-xl mt-8 font-normal">{item.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>


{/* 3 */}
<div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="h-62 w-5/6 flex flex-col m-4">
          <div className="flex items-center">
            <span className="text-5xl font-bold text-gray-500	">&#x2022;</span> <span className="ml-2 text-3xl font-medium mb-2">Front-end & Design tools</span>
          </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={4} // Show 4 slides at a time
              centeredSlides={false} // Disable centering since we are showing multiple slides
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                stopOnLastSlide: false,  // Ensure autoplay continues after the last slide
                waitForTransition: false,  // Disable waiting for transitions to complete
              }}
              pagination={{
                clickable: true, // Make pagination dots clickable
                dynamicBullets: false, // Optionally add dynamic bullets
              }}
              // Removed the navigation prop to hide arrows
              modules={[Autoplay, Pagination]}
              className="bg-white rounded-xl drop-shadow-xl shadow-black-800"
            >
              {front.map((item, index) => (
                <SwiperSlide key={index} className="flex flex-col justify-center items-center">
                  {/* Render image if pic exists */}
                  {item.pic && (
                    <div className="w-24 h-24 flex justify-center items-center">
                      <Image
                        src={item.pic}
                        alt={item.title}
                        className="object-cover rounded-lg"
                        width={100} // Adjust width to fit container
                        height={100} // Adjust height to fit container
                        layout="intrinsic" // Use intrinsic layout to avoid layout shift
                      />
                    </div>
                  )}
                  <p className="text-xl mt-8 font-normal">{item.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      
      {/* 4 */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="h-62 w-5/6 flex flex-col m-4">
          <div className="flex items-center">
            <span className="text-5xl font-bold text-gray-500	">&#x2022;</span> <span className="ml-2 text-3xl font-medium mb-2">Database Management</span>
          </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={4} // Show 4 slides at a time
              centeredSlides={false} // Disable centering since we are showing multiple slides
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                stopOnLastSlide: false,  // Ensure autoplay continues after the last slide
                waitForTransition: false,  // Disable waiting for transitions to complete
              }}
              pagination={{
                clickable: true, // Make pagination dots clickable
                dynamicBullets: false, // Optionally add dynamic bullets
              }}
              // Removed the navigation prop to hide arrows
              modules={[Autoplay, Pagination]}
              className="bg-white rounded-xl drop-shadow-xl shadow-black-800"
            >
              {dbManagement.map((item, index) => (
                <SwiperSlide key={index} className="flex flex-col justify-center items-center">
                  {/* Render image if pic exists */}
                  {item.pic && (
                    <div className="w-24 h-24 flex justify-center items-center">
                      <Image
                        src={item.pic}
                        alt={item.title}
                        className="object-cover rounded-lg"
                        width={100} // Adjust width to fit container
                        height={100} // Adjust height to fit container
                        layout="intrinsic" // Use intrinsic layout to avoid layout shift
                      />
                    </div>
                  )}
                  <p className="text-xl mt-8 font-normal">{item.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* 5 */}

      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="h-62 w-5/6 flex flex-col m-4">
          <div className="flex items-center">
            <span className="text-5xl font-bold text-gray-500	">&#x2022;</span> <span className="ml-2 text-3xl font-medium mb-2">Database Management</span>
          </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={4} // Show 4 slides at a time
              centeredSlides={false} // Disable centering since we are showing multiple slides
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                stopOnLastSlide: false,  // Ensure autoplay continues after the last slide
                waitForTransition: false,  // Disable waiting for transitions to complete
              }}
              pagination={{
                clickable: true, // Make pagination dots clickable
                dynamicBullets: false, // Optionally add dynamic bullets
              }}
              // Removed the navigation prop to hide arrows
              modules={[Autoplay, Pagination]}
              className="bg-white rounded-xl drop-shadow-xl shadow-black-800"
            >
              {dbManagement.map((item, index) => (
                <SwiperSlide key={index} className="flex flex-col justify-center items-center">
                  {/* Render image if pic exists */}
                  {item.pic && (
                    <div className="w-24 h-24 flex justify-center items-center">
                      <Image
                        src={item.pic}
                        alt={item.title}
                        className="object-cover rounded-lg"
                        width={100} // Adjust width to fit container
                        height={100} // Adjust height to fit container
                        layout="intrinsic" // Use intrinsic layout to avoid layout shift
                      />
                    </div>
                  )}
                  <p className="text-xl mt-8 font-normal">{item.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>


      {/* 6 */}


      <div className="flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <div className="h-62 w-5/6 flex flex-col m-4">
          <div className="flex items-center">
            <span className="text-5xl font-bold text-gray-500	">&#x2022;</span> <span className="ml-2 text-3xl font-medium mb-2">Database Management</span>
          </div>
            <Swiper
              spaceBetween={30}
              slidesPerView={4} // Show 4 slides at a time
              centeredSlides={false} // Disable centering since we are showing multiple slides
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                stopOnLastSlide: false,  // Ensure autoplay continues after the last slide
                waitForTransition: false,  // Disable waiting for transitions to complete
              }}
              pagination={{
                clickable: true, // Make pagination dots clickable
                dynamicBullets: false, // Optionally add dynamic bullets
              }}
              // Removed the navigation prop to hide arrows
              modules={[Autoplay, Pagination]}
              className="bg-white rounded-xl drop-shadow-xl shadow-black-800"
            >
              {dbManagement.map((item, index) => (
                <SwiperSlide key={index} className="flex flex-col justify-center items-center">
                  {/* Render image if pic exists */}
                  {item.pic && (
                    <div className="w-24 h-24 flex justify-center items-center">
                      <Image
                        src={item.pic}
                        alt={item.title}
                        className="object-cover rounded-lg"
                        width={100} // Adjust width to fit container
                        height={100} // Adjust height to fit container
                        layout="intrinsic" // Use intrinsic layout to avoid layout shift
                      />
                    </div>
                  )}
                  <p className="text-xl mt-8 font-normal">{item.title}</p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>




    </div>
  );
}
