import { useNavigate } from "react-router-dom";
import { ArrowDownOnSquareIcon } from "@heroicons/react/20/solid";

function Menu() {
  const navigate = useNavigate();

  function seeMenu(menu) {
    navigate(menu);
  }

  return (
    <>
      <div className="min-h-220 font-georgia bg-[url('/images/TablePic.jpg')] bg-cover bg-center flex justify-around items-center lg:flex-row flex-col lg:pt-0 pt-10">
        <div
          className="lg:w-1/4 md:w-2/5 sm:w-1/2 w-4/5 aspect-square flex justify-center items-center group hover:cursor-pointer relative mb-10 lg:mb-0"
          onClick={() => {
            seeMenu("/buffet");
          }}
        >
          <img
            src="/images/testfood.jpg"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/50 group-hover:bg-transparent duration-1800"></div>
          <div className="absolute z-0 text-black drop-shadow-lg">
            <div className="h-10"></div>
            <p className="text-5xl mb-10 group-hover:animate-fade-out-scale animate-fade-in-scale">
              Buffet
            </p>
            <p className="text-center underline group-hover:-translate-y-16 duration-1800 group-hover:text-white">
              View Menu
            </p>
          </div>
          <a
            className="absolute bottom-2 right-1 h-10 w-10 text-black"
            href="/pdfs/BuffetMenu.pdf"
            download="Springwater-Buffet-Menu.pdf"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ArrowDownOnSquareIcon />
          </a>
        </div>
        <div
          className="lg:w-1/4 md:w-2/5 sm:w-1/2 w-4/5 aspect-square flex justify-center items-center group hover:cursor-pointer relative mb-10 lg:mb-0"
          onClick={() => {
            seeMenu("/alacarte");
          }}
        >
          <img
            src="/images/testfoodalacarte.jpg"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/50 group-hover:bg-transparent duration-1800"></div>
          <div className="absolute z-0 text-black drop-shadow-lg">
            <div className="h-10"></div>
            <p className="text-5xl mb-10 group-hover:animate-fade-out-scale animate-fade-in-scale">
              À La Carte
            </p>
            <p className="text-center underline group-hover:-translate-y-16 duration-1800 group-hover:text-white">
              View Menu
            </p>
          </div>
          <a
            className="absolute bottom-2 right-1 h-10 w-10 text-black"
            href="/pdfs/ALaCarteMenu.pdf"
            download="Springwater-ALaCarte-Menu.pdf"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ArrowDownOnSquareIcon />
          </a>
        </div>
        <div className="lg:w-1/4 md:w-2/5 sm:w-1/2 w-4/5 aspect-square flex justify-center items-center group hover:cursor-pointer relative mb-10 lg:mb-0" onClick={() => {
            seeMenu("/takeaway");
          }}>
          <img
            src="/images/testfood2.jpg"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-white/50 group-hover:bg-transparent duration-1800"></div>
          <div className="absolute z-0 text-black drop-shadow-lg">
            <div className="h-10"></div>
            <p className="text-5xl mb-10 group-hover:animate-fade-out-scale animate-fade-in-scale">
              Takeaway
            </p>
            <p className="text-center underline group-hover:-translate-y-16 duration-1800 group-hover:text-white">
              View Menu
            </p>
          </div>
          <a
            className="absolute bottom-2 right-1 h-10 w-10 text-black"
            href="/pdfs/TakeawayMenu.pdf"
            download="Springwater-TakeAway-Menu.pdf"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <ArrowDownOnSquareIcon />
          </a>
        </div>
      </div>
    </>
  );
}

export default Menu;
