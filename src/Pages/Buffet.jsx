import { useEffect, useState } from "react";
import checkImagesLoaded from "../utils/checkImagesLoaded";

const Buffet = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hiddenLoading, setHiddenLoading] = useState(true);
  const images = [
    "/images/AllYouCanEatPage1.jpg",
    "/images/AllYouCanEatPage2.jpg",
    "/images/AllYouCanEatPage3.jpg",
    "/images/AllYouCanEatPage4.jpg",
  ];
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
          <div className="">
            <div>
              <img src="/images/AllYouCanEatPage1.jpg" alt="Buffet Menu Page 1" />
            </div>
            <div>
              <img src="/images/AllYouCanEatPage2.jpg" alt="Buffet Menu Page 2" />
            </div>
            <div>
              <img src="/images/AllYouCanEatPage3.jpg" alt="Buffet Menu Page 3" />
            </div>
            <div>
              <img src="/images/AllYouCanEatPage4.jpg" alt="Buffet Menu Page 4" />
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="bg-beige min-h-200 flex justify-center py-10 flex-wrap">
            <div className="xl:w-150 w-200">
              <img src="/images/AllYouCanEatPage1.jpg" alt="Buffet Menu Page 1" />
            </div>
            <div className="xl:w-150 w-200">
              <img src="/images/AllYouCanEatPage2.jpg" alt="Buffet Menu Page 2" />
            </div>
            <div className="xl:w-150 w-200">
              <img src="/images/AllYouCanEatPage3.jpg" alt="Buffet Menu Page 3" />
            </div>
            <div className="xl:w-150 w-200">
              <img src="/images/AllYouCanEatPage4.jpg" alt="Buffet Menu Page 4" />
            </div>
          </div>
        </>
      );
    }
  }
};

export default Buffet;
