import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination } from "swiper/modules";

const RestaurantSlider = () => {
  
  const images = [
    // "/images/messages/XmasMessage.webp",
    "/images/EntranceFrontPage.webp",
    "/images/EntranceFrontPage2.webp",
    "/images/SignFrontPage.webp",
    '/images/MenuBG.webp'
  ];
  const imageNames=[
    "A view of the entrance to the restaurant",
    "A view of the front of the restaurant",
    "The Springwater Cantonese Sign",
    "A well decorated table inside the restaurant"
  ] 
  if(window.innerWidth<800){
    images.unshift("/images/messages/XmasMessageMobile.webp")
  }else{
    images.unshift("/images/messages/XmasMessage.webp")
  }

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
        className="h-100 md:h-200 w-full object-center object-cover"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={image}>
              <img src={image} alt={imageNames[index]} fetchPriority={index===0?"high":"auto"} 
              className={`${index===2||index===9?`object-left`:`object-center`} h-100 md:h-200 w-full object-cover`}
              // className="h-100 md:h-200 w-full object-center object-cover"
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default RestaurantSlider;
