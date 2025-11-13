import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination } from "swiper/modules";

const EventSlider = ({images, imageNames}) => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        lazy="true"
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,Pagination]}
        className="h-full w-full object-center object-cover rounded-sm"
        
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={image}>
              <img src={image} alt={imageNames[index]}  className="h-full w-full object-center object-cover"/>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default EventSlider;