// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import 'swiper/css/navigation';
import Image from 'next/image';
import cryp from '../../../../public/crypto_cer.jpg'
import '../card/custom-arrow.css'

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function CardSlider() {

  const certificates = [
    {
      "pic" : cryp,
      "title": "Conversation on Cryptography",
      "place": "Udemy - online",
    },
    {
      "pic": cryp,
      "title": "Advanced Cryptography",
      "place": "Coursera - online",
    },
    {
      "pic": cryp,
      "title": "Advanced Cryptography",
      "place": "Coursera - online",
    },    {
      "pic": cryp,
      "title": "Advanced Cryptography",
      "place": "Coursera - online",
    },    {
      "pic": cryp,
      "title": "Advanced Cryptography",
      "place": "Coursera - online",
    },    {
      "pic": cryp,
      "title": "Advanced Cryptography",
      "place": "Coursera - online",
    },
  ];

  return (
    <>
      <div className="m-0 p-0">
        <Swiper
          navigation={true}
          slidesPerView={3}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {certificates.map((certificate, index) => (
            <SwiperSlide key={index} className="">

              <div className="relative bg-keyb bg-center bg-cover m-2 rounded-lg" style={{ height: "600px", width: "550px" }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-75 z-0 rounded-lg shadow-2xl shadow-black-900	"></div>
                
            {/* Content */}
            <div className="relative z-10 text-white text-left flex flex-col justify-between p-8 h-full">
                  <Image
                    src={certificate.pic}
                    alt={certificate.title}
                    className="w-full object-cover rounded-lg"
                    style={{ height: '350px' }}
                    layout="responsive"
                  />
                  <div className="flex flex-col flex-grow justify-between">
                    <h2 className="text-xl font-bold mt-4">{certificate.title}</h2>
                    <p className="text-semiBold text-grey text-base">{certificate.place}</p>
                    <button className="w-60 h-16 rounded-lg gradient-border bg-transparent text-white">More Details &#8594;</button>
                  </div>
                </div>
            </div>

            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </>
  );
}
