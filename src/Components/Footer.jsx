import { useEffect, useState } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (isMobile) {
    return (
      <footer
        id="contact"
        className="font-georgia bg-[url('/images/BarTop.jpg')] bg-cover bg-center text-testgold"
      >
        <div className="bg-black/50">
          <div className="pt-5">
            <div className="flex justify-center">
                  <img
                    className="h-80 mb-5"
                    src="/images/GoldLogo.png"
                    alt="Springwater Cantonese Restaurant's logo in gold"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="min-w-1/3 mx-left grid place-content-end mr-5">
                    <h3 className="text-2xl">Opening Hours</h3>
                    <ul>
                      <li className="text-sm">Monday: 5pm - 10:30pm</li>
                      <li className="text-sm">Tuesday: Closed</li>
                      <li className="text-sm">Wednesday: 5pm - 10:30pm</li>
                      <li className="text-sm">Thursday: 5pm - 10:30pm</li>
                      <li className="text-sm">Friday: 5pm - 11:30pm</li>
                      <li className="text-sm">Saturday: 5pm - 11:30pm</li>
                      <li className="text-sm">Sunday: 1pm - 10pm</li>
                    </ul>
                  </div>
                  <div className="border-1"></div>
                  <div className="min-w-1/3 mx-right grid place-content-start ml-5">
                    <h3 className="text-2xl">Book a table</h3>
                    <p className="text-sm">Moor Lane, Calverton,</p>
                    <p className="text-sm">
                      Nottingham NG<span className="font-merriweather">14 6</span>FZ
                    </p>
                    <p className="text-sm">
                      Call us on{" "}
                      <a href="tel:+441159654360" className="font-merriweather">
                        0115 965 4360
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex justify-center pb-5 pt-10 ">
              <p>©2025 Springwater Cantonese Restaurant</p>
            </div>
          </div>
        </div>
      </footer>
    )
  } else {
    return (
      // reduce the size of the text
      <footer
        id="contact"
        className="font-georgia bg-[url('/images/BarTop.jpg')] bg-cover bg-center text-testgold"
      > 
        <div className="bg-black/50">
          <div className="flex justify-center mx-auto pt-5">
            <div className="flex justify-between min-h-50">
              <div>
                <img
                  className="h-50 px-10"
                  src="/images/GoldLogo.png"
                  alt="Springwater Cantonese Restaurant's logo in gold"
                />
              </div>
              <div className="border-r-1 px-10 border-l-1">
                <h1 className="text-2xl mb-2">Opening Hours</h1>
                <ul>
                  <li className="text-sm">Monday: 5pm - 10:30pm</li>
                  <li className="text-sm">Tuesday: Closed</li>
                  <li className="text-sm">Wednesday: 5pm - 10:30pm</li>
                  <li className="text-sm">Thursday: 5pm - 10:30pm</li>
                  <li className="text-sm">Friday: 5pm - 11:30pm</li>
                  <li className="text-sm">Saturday: 5pm - 11:30pm</li>
                  <li className="text-sm">Sunday: 1pm - 10pm</li>
                </ul>
              </div>
              <div className="px-10">
                <h1 className="text-2xl mb-2">Book a table</h1>
                <p className="text-sm">Moor Lane, Calverton,</p>
                <p className="text-sm">
                  Nottingham NG<span className="font-merriweather">14 6</span>FZ
                </p>
                <p className="text-sm">
                  Call us on{" "}
                  <a href="tel:+441159654360" className="font-merriweather">
                    0115 965 4360
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 mx-auto flex justify-center pl-15 py-5">
            <p>©2025 Springwater Cantonese Restaurant</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
