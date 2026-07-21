"use client";

import { useState } from "react";
import "./Navbar.scss";
import { MdClose, MdMenu } from "react-icons/md";
import Image from "next/image";
import Logo from "@/public/images/basma-logo-long.png";
import Link from "next/link";
import { navItems } from "@/constants";
import { usePathname } from "next/navigation.js";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();

  function toggleShow() {
    setShow(!show);
  }

  return (
    <nav className="navbar shadow-xl">
      <Link href="/" className="navbar__logo">
        <Image src={Logo} alt="Logo" width={Logo.width} loading="eager" />
      </Link>

      <div className="navbar__list">
        <MdMenu
          onClick={toggleShow}
          className="icon-menu text-3xl sm:text-5xl lg:hidden"
        />
        <div className="hidden lg:flex lg:space-x-14 lg:text-light lg:font-bold lg:text-lg">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${isActive ? "text-primary" : "text-light"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className={`navbar__offcanvas lg:hidden ${
          show ? "offcanvas-show" : "offcanvas-hidden"
        } shadow-xl`}
      >
        <div className="navbar__offcanvas-header">
          <MdClose
            onClick={toggleShow}
            className="icon-close text-3xl sm:text-5xl"
          />
        </div>
        <div className="flex flex-col text-light font-semibold p-5 space-y-6 text-6vw sm:p-8 sm:space-y-10 sm:text-2xl">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${isActive ? "text-primary" : "text-light"}`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
