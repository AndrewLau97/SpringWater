import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Bars3Icon } from "@heroicons/react/20/solid";

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  function scrollToTop() {
    // window.scrollTo({ top: 0, left: 0 });
  }

  return (
    <nav className="font-georgia">
      <div className="lg:hidden flex justify-center">
        <button
          onClick={() => setShowNavBar(!showNavBar)}
          className="p-2"
          aria-label="Open menu on mobile only"
          onBlur={(e) => {
            if (!e.relatedTarget) {
              setShowNavBar(false);
            }
          }}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
      </div>
      <div className="flex justify-center">
        <ul
          // className="sm:flex flex-col sm:flex-row items-center text-lg"
          className={`${
            showNavBar ? "absolute z-1 w-full bg-beige text-center" : "hidden"
          } lg:flex flex-col lg:flex-row items-center text-xl gap-6 transition-all duration-1800npm `}
        >
          <li className="px-4 py-2 hover:bg-hoverbeige" onClick={() => {
              setShowNavBar(false);
            }}>
            <Link to="/" className="" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-hoverbeige" onClick={() => {
              setShowNavBar(false);
            }}>
            <Link to="/menu" className="" onClick={scrollToTop}>
              Menus
            </Link>
          </li>
          <li
            className="px-4 py-2 hover:bg-hoverbeige"
            onClick={() => {
              setShowNavBar(false);
            }}
          >
            <HashLink smooth to="/#celebrations">
              Celebrations
            </HashLink>
          </li>
          <li
            className="px-4 py-2 hover:bg-hoverbeige"
            onClick={() => {
              setShowNavBar(false);
            }}
          >
            <HashLink smooth to="/#privateEvents">
              Events
            </HashLink>
          </li>
          <li className="px-4 py-2 hover:bg-hoverbeige" onClick={() => {
              setShowNavBar(false);
            }}>
            <HashLink smooth to="/#about">
              About
            </HashLink>
          </li>
          <li className="px-4 py-2 hover:bg-hoverbeige" onClick={() => {
              setShowNavBar(false);
            }}>
            <Link to="/faq" className="" onClick={scrollToTop}>
              FAQs
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-hoverbeige ">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById("contact");
                target?.scrollIntoView({ behavior: "smooth" });
                setShowNavBar(false)
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
