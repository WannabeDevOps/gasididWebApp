// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

export default function CardSlider() {
  return (
    <>
      <div className=" m-0 p-0">
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
          <SwiperSlide className="">
            <div className="bg-red-200 m-2 rounded-lg " style={{height:"600px",width:"520px"}}></div>
          </SwiperSlide>



          <SwiperSlide className="">Slide 2</SwiperSlide>
          <SwiperSlide className="">Slide 3</SwiperSlide>
          <SwiperSlide className="">Slide 4</SwiperSlide>
          <SwiperSlide className="">Slide 5</SwiperSlide>
          <SwiperSlide className="">Slide 6</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
