import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import checkImagesLoaded from "../utils/checkImagesLoaded";

function Menu() {
  const navigate = useNavigate();
  const [hiddenLoading, setHiddenLoading] = useState(true);
  const images = [
    "/images/TablePic.jpg",
    "/images/MenuBlue.png",
    "/images/MenuRed.png",
    "/images/MenuGreen.png",
  ];

  useEffect(() => {
    checkImagesLoaded(images, setHiddenLoading);
  }, []);
  function seeMenu(menu) {
    navigate(menu);
  }
  if (hiddenLoading) {
    return (
      <>
        <div className="bg-beige min-h-200"></div>
      </>
    );
  } else {
    return (
      <>
        <div className="min-h-220 font-georgia bg-[url('/images/TestMenuBG.jpg')] bg-cover bg-center flex justify-around items-center lg:flex-row flex-col lg:pt-0 pt-10 ">
          <div
            className="lg:w-1/4 md:w-2/5 sm:w-1/2 w-4/5 aspect-square flex justify-center items-center group hover:cursor-pointer relative mb-10 lg:mb-0 "
            onClick={() => {
              seeMenu("/allyoucaneat");
            }}
          >
            <img
              src="/images/MenuGreen.png"
              className="h-full w-full object-cover rounded-sm"
            />
            <div className="absolute inset-0 hover:bg-white/30 duration-1800"></div>
            <div className="absolute z-0 top-0 text-black drop-shadow-lg flex flex-col-reverse">
              {/* <div className="h-10 border-1"></div> */}
              <p className="text-3xl group-hover:animate-fade-out-scale animate-fade-in-scale mb-2 text-3xl lg:text-2xl xl:text-3xl text-testgold">
                All You Can Eat
              </p>
              <p className="text-center underline group-hover:translate-y-10 duration-1000 group-hover:text-white group-hover:animate-fade-in-scale animate-fade-out-scale">
                View Menu
              </p>
            </div>
            <a
              className="absolute bottom-2 right-2 h-8 w-8 xl:h-10 xl:w-10 text-black"
              href="/pdfs/BuffetMenu.pdf"
              download="Springwater-Buffet-Menu.pdf"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img src="/images/DownloadIcon.png" className="w-full h-full"/>
            </a>
          </div>
          <div
            className="lg:w-1/4 md:w-2/5 sm:w-1/2 w-4/5 aspect-square flex justify-center items-center group hover:cursor-pointer relative mb-10 lg:mb-0"
            onClick={() => {
              seeMenu("/alacarte");
            }}
          >
            <img
              src="/images/MenuBlue.png"
              className="h-full w-full object-cover rounded-sm"
            />
            <div className="absolute inset-0 hover:bg-white/30 duration-1000"></div>
            <div className="absolute z-0 top-0 text-black drop-shadow-lg flex flex-col-reverse">
              {/* <div className="h-10"></div> */}
              <p className="text-3xl group-hover:animate-fade-out-scale animate-fade-in-scale mb-2 text-3xl lg:text-2xl xl:text-3xl text-testgold">
                À La Carte
              </p>
              <p className="text-center underline group-hover:translate-y-10 duration-1800 group-hover:text-white group-hover:animate-fade-in-scale animate-fade-out-scale">
                View Menu
              </p>
            </div>
            <a
              className="absolute bottom-2 right-2 h-8 w-8 xl:h-10 xl:w-10 text-black"
              href="/pdfs/ALaCarteMenu.pdf"
              download="Springwater-ALaCarte-Menu.pdf"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img src="/images/DownloadIcon.png" className="w-full h-full"/>
            </a>
          </div>
          <div
            className="lg:w-1/4 md:w-2/5 sm:w-1/2 w-4/5 aspect-square flex justify-center items-center group hover:cursor-pointer relative mb-10 lg:mb-0"
            onClick={() => {
              seeMenu("/takeaway");
            }}
          >
            <img
              src="/images/MenuRed.png"
              className="h-full w-full object-cover rounded-sm"
            />
            <div className="absolute inset-0 hover:bg-white/30 duration-1000"></div>
            <div className="absolute z-0 top-0 text-black drop-shadow-lg flex flex-col-reverse">
              {/* <div className="h-10"></div> */}
              <p className="text-3xl group-hover:animate-fade-out-scale animate-fade-in-scale mb-2 text-3xl lg:text-2xl xl:text-3xl text-testgold">
                Takeaway
              </p>
              <p className="text-center underline group-hover:translate-y-10 duration-1800 group-hover:text-white group-hover:animate-fade-in-scale animate-fade-out-scale">
                View Menu
              </p>
            </div>
            <a
              className="absolute bottom-2 right-2 h-8 w-8 xl:h-10 xl:w-10"
              href="/pdfs/TakeawayMenu.pdf"
              download="Springwater-TakeAway-Menu.pdf"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <img src="/images/DownloadIcon.png" className="w-full h-full"/>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Menu;
