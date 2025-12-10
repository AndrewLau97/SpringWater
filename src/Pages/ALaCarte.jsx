import { useEffect, useState } from "react";
import checkImagesLoaded from "../utils/checkImagesLoaded";

const ALaCarte = () => {
  const [hiddenLoading, setHiddenLoading] = useState(true);
  const images = [
    "/images/menu/ALaCartePage1.jpg",
    "/images/menu/ALaCartePage2.jpg",
    "/images/menu/ALaCartePage3.jpg",
    "/images/menu/ALaCartePage4.jpg",
    "/images/menu/ALaCartePage5.jpg",
    "/images/menu/ALaCartePage6.jpg",
    "/images/menu/ALaCartePage7.jpg",
    "/images/menu/ALaCartePage8.jpg",
    "/images/menu/ALaCartePage9.jpg",
  ];
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    checkImagesLoaded(images, setHiddenLoading);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (hiddenLoading) {
    return (
      <>
        <div className="bg-beige min-h-200"></div>
      </>
    );
  } else {
    if (isMobile) {
      return (
        <>
          <div className="bg-beige">
            <div>
              <img
                src="/images/menu/ALaCartePage1.jpg"
                alt="A La Carte Menu Page 1"
              />
            </div>
            <div>
              <img
                src="/images/menu/ALaCartePage2.jpg"
                alt="A La Carte Menu Page 2"
              />
            </div>
            <div>
              <img
                src="/images/menu/ALaCartePage3.jpg"
                alt="A La Carte Menu Page 3"
              />
            </div>
            <div>
              <img
                src="/images/menu/ALaCartePage4.jpg"
                alt="A La Carte Menu Page 4"
              />
            </div>
            <div>
              <img
                src="/images/menu/ALaCartePage5.jpg"
                alt="A La Carte Menu Page 5"
              />
            </div>
            <div>
              <img
                src="/images/menu/ALaCartePage6.jpg"
                alt="A La Carte Menu Page 6"
              />
            </div>
            <div>
              <img
                src="/images/menu/ALaCartePage7.jpg"
                alt="A La Carte Menu Page 7"
              />
            </div>
            <div>
              <img
                src="/images/menu/ALaCartePage8.jpg"
                alt="A La Carte Menu Page 8"
              />
            </div>
            <div>
              <img
                src="/images/menu/ALaCartePage9.jpg"
                alt="A La Carte Menu Page 9"
              />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <div className="bg-beige min-h-200 flex justify-center py-10 flex-wrap xl:px-10">
          <div className="xl:w-1/3 w-200 min-w-120">
            <img src="/images/menu/ALaCartePage1.jpg" alt="A La Carte Menu Page 1" />
          </div>
          <div className="xl:w-1/3 w-200 min-w-120">
            <img src="/images/menu/ALaCartePage2.jpg" alt="A La Carte Menu Page 2" />
          </div>
          <div className="xl:w-1/3 w-200 min-w-120">
            <img src="/images/menu/ALaCartePage3.jpg" alt="A La Carte Menu Page 3" />
          </div>
          <div className="xl:w-1/3 w-200 min-w-120">
            <img src="/images/menu/ALaCartePage4.jpg" alt="A La Carte Menu Page 4" />
          </div>
          <div className="xl:w-1/3 w-200 min-w-120">
            <img src="/images/menu/ALaCartePage5.jpg" alt="A La Carte Menu Page 5" />
          </div>
          <div className="xl:w-1/3 w-200 min-w-120">
            <img src="/images/menu/ALaCartePage6.jpg" alt="A La Carte Menu Page 6" />
          </div>
          <div className="xl:w-1/3 w-200 min-w-120">
            <img src="/images/menu/ALaCartePage7.jpg" alt="A La Carte Menu Page 7" />
          </div>
          <div className="xl:w-1/3 w-200 min-w-120">
            <img src="/images/menu/ALaCartePage8.jpg" alt="A La Carte Menu Page 8" />
          </div>
          <div className="xl:w-1/3 w-200 min-w-120">
            <img src="/images/menu/ALaCartePage9.jpg" alt="A La Carte Menu Page 9" />
          </div>
        </div>
      );
    }
  }
};

export default ALaCarte;
