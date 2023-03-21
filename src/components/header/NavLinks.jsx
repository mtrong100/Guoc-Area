import React from "react";

const NavLinks = ({ name, path }) => {
  return (
    <>
      <li>
        <a
          className="text-lg relative links font-medium hover:text-primary transition-all duration-300"
          href={path}
        >
          {name}
        </a>
      </li>
    </>
  );
};

export default NavLinks;
