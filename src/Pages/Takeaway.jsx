import { useEffect, useState } from "react";
import checkImagesLoaded from "../utils/checkImagesLoaded";

const Takeaway = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hiddenLoading, setHiddenLoading] = useState(true);
  const images = [
    "/images/menu/TakeawayPage1.jpg",
    "/images/menu/TakeawayPage2.jpg",
    "/images/menu/TakeawayPage3.jpg",
    "/images/menu/TakeawayPage4.jpg",
    "/images/menu/TakeawayPage5.jpg",
    "/images/menu/TakeawayPage6.jpg",
    "/images/menu/TakeawayFullPage1.jpg",
    "/images/menu/TakeawayFullPage2.jpg",
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
            <div className="flex justify-center">
              <img src="/images/menu/TakeawayPage1.jpg" alt="Takeaway Menu Page 1" />
            </div>
            <div className="flex justify-center">
              <img src="/images/menu/TakeawayPage2.jpg" alt="Takeaway Menu Page 2" />
            </div>
            <div className="flex justify-center">
              <img src="/images/menu/TakeawayPage3.jpg" alt="Takeaway Menu Page 3" />
            </div>
            <div className="flex justify-center">
              <img src="/images/menu/TakeawayPage4.jpg" alt="Takeaway Menu Page 4" />
            </div>
            <div className="flex justify-center">
              <img src="/images/menu/TakeawayPage5.jpg" alt="Takeaway Menu Page 5" />
            </div>
            <div className="flex justify-center">
              <img src="/images/menu/TakeawayPage6.jpg" alt="Takeaway Menu Page 6" />
            </div>
          </div>
        </>
      );
    } else {
      //redesign this part
      return (
        <>
          <div className="bg-beige min-h-200 flex justify-center py-10 flex-wrap">
            <div className="flex justify-center">
              <img
                src="/images/menu/TakeawayFullPage1.jpg"
                alt="Takeaway Menu Page 1"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/menu/TakeawayFullPage2.jpg"
                alt="Takeaway Menu Page 2"
              />
            </div>
          </div>
        </>
      );
    }
  }
};

export default Takeaway;
