import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination } from "swiper/modules";
import { m } from "framer-motion";

const RestaurantSlider = () => {
  const images = [
    "/images/EntranceFrontPage.jpg",
    "/images/Entrance2FrontPage.jpg",
    "/images/SignFrontPage2.jpg",
    '/images/TestMenuBG.jpg'
  ];
  const imageNames=[
    "A view of the entrance to the restaurant",
    "A view of the front of the restaurant",
    "The Springwater Cantonese Sign",
    "A well decorated table inside the restaurant"
  ]
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
              <img src={image} alt={imageNames[index]} className="h-100 md:h-200 w-full object-center object-cover"/>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default RestaurantSlider;
