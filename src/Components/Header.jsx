import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 260);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        scrolled ? "bg-beige/80" : "bg-beige"
      } text-yellow-800 sticky flex top-0 w-full shadow-sm shadow-dark-mild z-10 transition-colors duration-1000`}
    >
      <div className="w-full">
          <motion.div 
          initial={{ scale: 1 }}
    animate={{ scale: scrolled ? 0.7 : 1 }}
    transition={{ duration: 0.8, ease: "easeInOut" }}
    className="w-full flex justify-center">
            <h1
              className={` font-georgia text-center text-red hover:cursor-pointer sm:pt-5 pt-2 transition-all duration-1000 mx-auto md:text-7xl text-5xl ${
                scrolled
                  ? "h-20"
                  : "h-25"
              }`}
              onClick={() => {
                navigate("/");
              }}
            >
              Springwater<br className="block sm:hidden"/> Cantonese
            </h1>
          </motion.div>
        <NavBar/>
      </div>
    </header>
  );
}

export default Header;
