import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Pagination } from "swiper/modules";

const RestaurantSlider = () => {
  const images = [
    "/images/EntranceFrontPage.jpg",
    "/images/Entrance2FrontPage.jpg",
    "/images/SignFrontPage2.jpg",
    // "/images/FountainFrontPage.jpg",
    // "/images/GardenFrontPage.jpg",
    '/images/TestMenuBG.jpg'
  ];
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
        {images.map((image) => {
          return (
            <SwiperSlide key={image}>
              <img src={image}  className="h-100 md:h-200 w-full object-center object-cover"/>
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default RestaurantSlider;
