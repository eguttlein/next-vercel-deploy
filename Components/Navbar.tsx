import Navlink from "./Navlink";
import React from "react";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    <nav>
      {menuItems.map(({ href, text }) => (
        <Navlink href={href} text={text} />
      ))}
    </nav>
  );
};

export default Navbar;
