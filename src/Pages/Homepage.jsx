import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import checkImagesLoaded from "../utils/checkImagesLoaded";
import RestaurantSlider from "../Components/RestaurantSlider";
import { Link } from "react-router-dom";
import EventSlider from "../Components/EventSlider";

function Homepage() {
  const [hiddenLoading, setHiddenLoading] = useState(true);
  const images = [
    "/images/EntranceFrontPage.jpg",
    "/images/Fountain.png",
    "/images/XmasDeco.png",
    "/images/BalloonArch.png",
    "/images/BarTop.jpg",
    "/images/TablePic.jpg",
    "/images/MenuBlue.png",
    "/images/MenuRed.png",
    "/images/MenuGreen.png",
  ];
  const location = useLocation();
  const navigate = useNavigate();
  function preloadImages(urls) {
  for (let url of urls) {
    const img = new Image();
    img.src = url;
  }
}
const imageUrls = [
  "/images/TablePic.jpg",
    "/images/MenuBlue.png",
    "/images/MenuRed.png",
    "/images/MenuGreen.png",
];
useEffect(() => {
  checkImagesLoaded(images, setHiddenLoading);
  preloadImages(imageUrls);
    if (location.hash) {
      requestAnimationFrame(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }
  }, [location]);
  if (hiddenLoading) {
    return (
      <>
        <div className="min-h-200"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="">
          <RestaurantSlider />
        </div>
        <div className="font-georgia py-10  text-black">
          <p className="text-center py-5 text-3xl sm:mx-20 mx-5">
            Your Table is Ready — Welcome to Nottingham's home of Cantonese
            Cuisine
          </p>
          <p className="sm:w-1/2 sm:mx-auto mb-5 text-center mx-5">
            A bright and welcoming space, Springwater Cantonese Restaurant
            offers authentic Cantonese cuisine in a relaxed, family-friendly
            setting. Located just outside Nottingham, it's the perfect spot to
            enjoy delicious food and warm hospitality away from the bustle of
            the city.
          </p>
          <div className="flex justify-center md:text-5xl text-2xl">
            <button
              onClick={() => {
                navigate("/menu");
              }}
              className="p-2 border-1 hover:cursor-pointer hover:bg-hoverbeige rounded-sm"
            >
              View Menus
            </button>
          </div>
        </div>
        <div
          className="min-h-150 text-black scroll-mt-35 flex w-full lg:flex-row flex-col"
          id="about"
        >
          <div className="lg:w-1/2 py-10 lg:px-10 sm:px-20 px-10">
          <EventSlider
                images={[
                  "/images/Fountain.png",
                  "/images/Fountain2.png",
                ]}
              />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="xl:w-2/3 text-center lg:mx-auto mx-10 font-georgia lg:w-4/5 md:w-2/3 md:mx-auto">
              <p className="mx-auto mb-5 text-lg">
                For over 30 years, we've been bringing Nottingham the joy of
                authentic Cantonese cuisine. From our first day to today, our
                passion for great food and memorable dining experiences
                continues to delight both loyal fans and a new generation of
                food lovers.
              </p>
              <div>
                <p className="text-lg font-bold mb-2">Opening Times:</p>
                <div className="flex text-left w-fit mx-auto">
                  <div className="mr-5">
                    <p>Monday:</p>
                    <p>Tuesday:</p>
                    <p>Wednesday:</p>
                    <p>Thursday:</p>
                    <p>Friday:</p>
                    <p>Saturday:</p>
                    <p>Sunday:</p>
                  </div>
                  <div>
                    <p>5pm-10:30pm</p>
                    <p>Closed</p>
                    <p>5pm-10:30pm</p>
                    <p>5pm-10:30pm</p>
                    <p>5pm-11:30pm</p>
                    <p>5pm-11:30pm</p>
                    <p>1pm-10pm</p>
                  </div>
                </div>
              </div>
              <div className="mt-5 mb-5 lg:mb-0">
                <p>
                  Please book in advance in order to avoid disappointment -{" "}
                  <a href="tel:+441159654360" className="font-merriweather">
                    0115 965 4360
                  </a>
                </p>
              </div>
            </div>
            <div className="md:w-2/3 md:h-72 mx-auto xl:block hidden mt-10">
              <iframe
                className="w-full h-full rounded-sm"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068.7233745837748!2d-1.0575866446835944!3d53.03469264896901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c779671fb6bb%3A0x718b4bac39d8b075!2sSpringwater%20Chinese%20Restaurant!5e0!3m2!1sen!2suk!4v1752495830791!5m2!1sen!2suk"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="xl:hidden pt-10 ">
          <iframe
            className="w-2/3 h-80 mx-auto rounded-sm"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068.7233745837748!2d-1.0575866446835944!3d53.03469264896901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c779671fb6bb%3A0x718b4bac39d8b075!2sSpringwater%20Chinese%20Restaurant!5e0!3m2!1sen!2suk!4v1752495830791!5m2!1sen!2suk"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div
          className="py-10 text-black flex w-full lg:flex-row flex-col-reverse font-georgia scroll-mt-25 text-lg"
          id="celebrations"
        >
          <div className="xl:w-2/3 text-center lg:mx-auto mx-10 font-georgia lg:w-4/5 md:w-2/3 md:mx-auto flex items-center">
            <div className="text-center my-10 md:my-0 xl:mx-20 sm:mx-10 gap-5 flex flex-col">
              <h1 className="text-3xl font-bold">
                🎉 Special
                <span className="sm:hidden">
                  {" "}
                  🎉
                  <br />
                </span>{" "}
                Celebrations <span className="hidden sm:inline">🎉</span>
              </h1>
              <p className="text-lg underline">
                Celebrate the season with us at Springwater Cantonese!
              </p>
              <div>
                <p>
                  <span className="font-bold">Chinese New Year</span>: For an
                  entire week around Chinese New Year, experience the thrill of
                  a live dragon dance right here in the restaurant — bringing
                  good luck and festive energy to every visit!
                </p>
                <Link
                  className="underline font-bold hover:cursor-pointer"
                  to="/cny"
                  onClick={() => {
                    // window.scrollTo({ top: 0, left: 0 });
                  }}
                >
                  See Details
                </Link>
              </div>
              <div>
                <p>
                  <span className="font-bold">Christmas & New Years eve</span>:
                  Every Friday and Saturday night in December, our restaurant
                  transforms into a festive celebration spot - complete with a
                  dance floor, dj and good vibes for friends and family to
                  enjoy. Make your December weekends unforgettable with us!{" "}
                </p>
                <Link
                  className="underline font-bold hover:cursor-pointer"
                  to="/xmas-nye"
                  onClick={() => {
                    // window.scrollTo({ top: 0, left: 0 });
                  }}
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
          <div className=" lg:w-1/2 py-10 lg:px-10 sm:px-20 px-10">
            <div className="w-4/5 mx-auto">
              <EventSlider
                images={[
                  "/images/XmasDeco.png",
                  "/images/XmasDeco2.png",
                  "/images/CNYHorseBG2.jpg",
                ]}
              />
            </div>
          </div>
        </div>
        <div
          className="py-10 text-black flex w-full lg:flex-row flex-col font-georgia scroll-mt-25"
          id="privateEvents"
        >
          <div className=" lg:w-1/2 py-10 lg:px-10 sm:px-20 px-10">
            <div className="w-4/5 mx-auto">
              <EventSlider
                images={[
                  "/images/BalloonArch.png",
                  "/images/TableEvent.jpg",
                  "/images/TableEvent2.jpg",
                  "/images/CakeFlower.jpg",
                  "/images/RedEnvelope.jpg",
                  "/images/testingsquare.png",
                  "/images/testingsquare2.png",
                ]}
              />
            </div>
          </div>
          <div className="xl:w-2/3 text-center lg:mx-auto mx-10 font-georgia lg:w-4/5 md:w-2/3 md:mx-auto flex items-center">
            <div className="text-center my-10 md:my-0 xl:mx-20 sm:mx-10 gap-5 flex flex-col">
              <h1 className="text-3xl font-bold">Events</h1>

              <p className="text-lg">
                Have a special celebration coming up? Whether it's a birthday,
                anniversary, corporate dinner, or just a gathering with your favourite people, the restaurant offers the perfect setting for
                larger parties. With over 30 years experience, let us help you
                plan that wonderful party or the perfect event!
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Homepage;
