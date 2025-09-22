import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import checkImagesLoaded from "../utils/checkImagesLoaded";

function Homepage() {
  const [hiddenLoading,setHiddenLoading]=useState(true)
  const zodiacAnimals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  const images=["/images/testimage.jpg","/images/TablePic3Test.jpg","/images/testcny.jpg", "/images/testmarble.jpeg"]
  const currentYear = new Date().getFullYear();
  const zodiacYear = (currentYear - 2020) % 12;
  const zodiac = zodiacAnimals[zodiacYear < 0 ? zodiacYear + 12 : zodiacYear];
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // const start=()=>{
    //   let loadedCount=0;
    //   images.forEach((src)=>{
    //     const img=new Image();
    //     img.src=src;
    //     img.onload=()=>{
    //       loadedCount+=1;
    //       if(loadedCount===images.length){
    //         setHiddenLoading(false)
    //       }
    //     }
    //   })
    // }
    // start()
    checkImagesLoaded(images, setHiddenLoading)
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
  if(hiddenLoading){
    return (<><div className="min-h-200 bg-beige"></div></>)
  }else{
  return (
    <>
      <div className="min-h-200 bg-beige">
        <div className="h-200 w-full object-center object-cover bg-[url('/images/testimage.jpg')] bg-center bg-cover pt-10"></div>
      </div>
      <div className="text-black bg-beige font-georgia py-10">
        <p className="text-center py-5 text-3xl sm:mx-20 mx-5">
          Your table is ready — welcome to Nottingham's home of Cantonese dining
        </p>
        <p className="sm:w-1/2 sm:mx-auto mb-5 text-center mx-5">
          A bright and welcoming space, Springwater Cantonese Restaurant offers
          authentic Cantonese dining in a relaxed, family-friendly setting.
          Located just outside Nottingham, it's the perfect spot to enjoy
          delicious food and warm hospitality away from the bustle of the city.
        </p>
        <div className="flex justify-center">
          <button
            onClick={() => {
              navigate("/menu");
            }}
            className="p-2 border-1 hover:cursor-pointer hover:bg-hoverbeige bg-beige"
          >
            View Menus
          </button>
        </div>
      </div>
      <div
        className="min-h-150 justify-between text-black bg-beige scroll-mt-25 flex w-full lg:flex-row flex-col"
        id="about"
      >
        <div className=" lg:w-1/2 my-10 lg:mx-10 aspect-square flex items-center md:mx-40 sm:mx-20 mx-10">
            <div>
              <img
                src="/images/TablePic3Test.jpg"
                className="w-full h-full object-cover"
              />
            </div>
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <div className="lg:w-2/3 text-center lg:mx-auto mx-10 font-georgia">
            <p className="mx-auto mb-5 text-lg">
              For 30 years, we've been bringing Nottingham the joy of authentic
              Cantonese cuisine. From our first day to today, our passion for
              great food and memorable dining experiences continues to delight
              both loyal fans and a new generation of food lovers.
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
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068.7233745837748!2d-1.0575866446835944!3d53.03469264896901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c779671fb6bb%3A0x718b4bac39d8b075!2sSpringwater%20Chinese%20Restaurant!5e0!3m2!1sen!2suk!4v1752495830791!5m2!1sen!2suk"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-beige xl:hidden pt-10">
        <iframe
          className="w-2/3 h-80 mx-auto"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1068.7233745837748!2d-1.0575866446835944!3d53.03469264896901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c779671fb6bb%3A0x718b4bac39d8b075!2sSpringwater%20Chinese%20Restaurant!5e0!3m2!1sen!2suk!4v1752495830791!5m2!1sen!2suk"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="py-10 text-black bg-beige flex w-full lg:flex-row flex-col-reverse">
        <div
          className="lg:w-1/2 scroll-mt-25 flex items-center"
          id="promotions"
        >
          <div className="text-center sm:mx-20 my-10 md:my-0 sm:mx-20 mx-10">
            <h1 className="text-3xl font-georgia">
              {currentYear} - The year of the {zodiac}
            </h1>
            <a
              className="underline hover:cursor-pointer"
              href={`https://chinesenewyear.net/zodiac/${zodiac}/`}
              target="_blank"
            >
              Explore the year of the {zodiac}
            </a>
            <p>Learn about this year's zodiac and what it symbolises</p>
            <br />
            <p>🎉 Special Celebrations</p>
            <p className="mb-5">Celebrate the season with us!</p>
            <p>
              <span className="font-bold">Lunar New Year</span>: For an entire week around Lunar New Year,
              experience the thrill of a live dragon dance right here in the
              restaurant — bringing good luck and festive energy to every visit!
            </p>
            <br />
            <p>
              <span className="font-bold">Christmas & New Years</span>: Every Friday and Saturday night in
              December, our restaurant transforms into a festive celebration
              spot - complete with a dance floor, dj and good vibes for friends
              and family to enjoy. Make your December weekends unforgettable
              with us!{" "}
            </p>
          </div>
        </div>
        <div className=" lg:w-1/2 my-10 lg:mx-10 aspect-square flex items-center md:mx-40 sm:mx-20 mx-10">
          
            <div>
              <img
                src="/images/testcny.jpg"
                className="w-full h-full object-cover"
              />
            </div>
          
        </div>
      </div>
    </>
  );}
}

export default Homepage;
