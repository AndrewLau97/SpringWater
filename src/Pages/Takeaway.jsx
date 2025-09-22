import { useEffect, useState } from "react";
import checkImagesLoaded from "../utils/checkImagesLoaded";

const Takeaway = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [hiddenLoading, setHiddenLoading] = useState(true);
  const images = [
    "/images/TakeawayPage1.jpg",
    "/images/TakeawayPage2.jpg",
    "/images/TakeawayPage3.jpg",
    "/images/TakeawayPage4.jpg",
    "/images/TakeawayPage5.jpg",
    "/images/TakeawayPage6.jpg",
    "/images/TakeawayFullPage1.jpg",
    "/images/TakeawayFullPage2.jpg",
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
              <img src="/images/TakeawayPage1.jpg" alt="Takeaway Menu Page 1" />
            </div>
            <div className="flex justify-center">
              <img src="/images/TakeawayPage2.jpg" alt="Takeaway Menu Page 2" />
            </div>
            <div className="flex justify-center">
              <img src="/images/TakeawayPage3.jpg" alt="Takeaway Menu Page 3" />
            </div>
            <div className="flex justify-center">
              <img src="/images/TakeawayPage4.jpg" alt="Takeaway Menu Page 4" />
            </div>
            <div className="flex justify-center">
              <img src="/images/TakeawayPage5.jpg" alt="Takeaway Menu Page 5" />
            </div>
            <div className="flex justify-center">
              <img src="/images/TakeawayPage6.jpg" alt="Takeaway Menu Page 6" />
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
                src="/images/TakeawayFullPage1.jpg"
                alt="Takeaway Menu Page 1"
              />
            </div>
            <div className="flex justify-center">
              <img
                src="/images/TakeawayFullPage2.jpg"
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
