import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate=useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 130);
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
      } text-yellow-800 sticky flex top-0 w-full shadow-sm shadow-dark-mild z-1 transition-colors duration-800`}
    >
      <div className="w-full">
        <h1 className="text-5xl font-georgia text-center text-red hover:cursor-pointer mt-5" onClick={()=>{navigate("/")}}>Springwater Cantonese</h1>
        <NavBar />
      </div>
    </header>
  );
}

export default Header;
