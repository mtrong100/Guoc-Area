import React from "react";

const NavMobile = ({ name, path, setToggle, toggle }) => {
  return (
    <>
      <li className="px-8">
        <a
          onClick={() => setToggle(!toggle)}
          className="text-2xl md:text-4xl relative links font-medium hover:text-primary transition-all duration-300"
          href={path}
        >
          {name}
        </a>
      </li>
    </>
  );
};

export default NavMobile;
