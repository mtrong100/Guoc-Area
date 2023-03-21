import React, { useEffect, useState } from "react";
import { links } from "../../Data";
import logo from "../../assets/images/logo.png";
import NavLinks from "./NavLinks";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import NavMobile from "./NavMobile";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setActive(window.scrollY > 20);
    });
  }, []);

  return (
    <header
      className={`${
        active ? "bg-third" : ""
      } fixed py-4 top-0 transition-all duration-500 left-0 right-0 z-10`}
    >
      <div className="wrapper flex items-center justify-between">
        <a href="/">
          <div className="w-[100px] md:w-[150px]">
            <img src={logo} alt="logo-img" className="img-cover" />
          </div>
        </a>
        {/* MENU ON PC */}
        <ul className="lg:flex hidden items-center gap-6">
          {links.map((item, id) => {
            return <NavLinks key={id} {...item}></NavLinks>;
          })}
        </ul>

        {/* TOGGLE MENU ON MOBILE */}
        <HiMenuAlt3
          onClick={() => setToggle(!toggle)}
          className="text-4xl md:text-5xl lg:hidden"
        ></HiMenuAlt3>
        <ul
          className={`${
            toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } flex flex-col md:items-center items-stretch gap-5 md:gap-14 fixed top-0 bottom-0 right-0 left-0 bg-bgColor pt-20 md:pt-28 transition-all duration-500 `}
        >
          <HiX
            onClick={() => setToggle(!toggle)}
            className="text-white text-3xl md:text-5xl absolute top-5 right-5"
          ></HiX>
          {links.map((item, id) => {
            return (
              <NavMobile
                toggle={toggle}
                setToggle={setToggle}
                key={id}
                {...item}
              ></NavMobile>
            );
          })}
        </ul>
      </div>
    </header>
  );
};

export default Header;
