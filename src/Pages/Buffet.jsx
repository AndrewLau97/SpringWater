import { useEffect, useState } from "react";

const Buffet = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (isMobile) {
    return (
      <>
        <div className="">
          <div>
            <img src="/images/BuffetPage1.jpg" alt="Buffet Menu Page 1" />
          </div>
          <div>
            <img src="/images/BuffetPage2.jpg" alt="Buffet Menu Page 2" />
          </div>
          <div>
            <img src="/images/BuffetPage3.jpg" alt="Buffet Menu Page 3" />
          </div>
          <div>
            <img src="/images/BuffetPage4.jpg" alt="Buffet Menu Page 4" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="bg-beige min-h-200 flex justify-center py-10 flex-wrap">
          <div className="xl:w-150 w-200">
            <img src="/images/BuffetPage1.jpg" alt="Buffet Menu Page 1" />
          </div>
          <div className="xl:w-150 w-200">
            <img src="/images/BuffetPage2.jpg" alt="Buffet Menu Page 2" />
          </div>
          <div className="xl:w-150 w-200">
            <img src="/images/BuffetPage3.jpg" alt="Buffet Menu Page 3" />
          </div>
          <div className="xl:w-150 w-200">
            <img src="/images/BuffetPage4.jpg" alt="Buffet Menu Page 4" />
          </div>
        </div>
      </>
    );
  }
};

export default Buffet;
