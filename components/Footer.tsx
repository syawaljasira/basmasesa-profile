"use client";

// import { TbBrandTiktok } from "react-icons/tb";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import LogoSm from "@/public/images/basma-logo-and-title-short.png";
import LogoLg from "@/public/images/basma-logo-long.png";
import { navItems } from "@/constants";
import "./Footer.scss";

const Footer = () => {
  const pathname = usePathname();
  const phoneNumber = "6281553046054";
  const waMessage = "Hallo Basmasesa Contractor";

  return (
    <footer className="footer flex flex-col space-y-12 sm:space-y-14">
      <div className="w-7/12 flex mx-auto sm:w-6/12 lg:hidden">
        <Image
          src={LogoSm}
          alt="Basma Logo"
          width={LogoSm.width}
          loading="eager"
        />
      </div>
      <div className="w-full flex flex-col space-y-8 text-light text-lg font-medium sm:space-y-12 sm:text-2xl lg:text-lg lg:flex-row lg:mx-auto lg:space-y-0 lg:items-center lg:justify-between 2xl:text-1.2vw">
        <div className="w-11/12 mx-auto flex flex-col items-start space-y-1 sm:space-y-4 lg:w-3/12 lg:mx-0">
          <h6 className="text-2xl font-bold pb-2 sm:text-4xl sm:pb-4 lg:text-2xl">
            Quick Page
          </h6>

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
        <div className="w-full flex flex-row justify-center space-x-10 text-3xl text-primary sm:space-x-14 sm:text-4xl lg:w-3/12 2xl:text-3xl 2xl:space-x-16">
          <a href={`https://wa.me/${phoneNumber}?text=${waMessage}`}>
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/basmasesa.kreasi/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          {/* <a
            href="https://www.tiktok.com/@basma.contractor"
            target="_blank"
            rel="noreferrer"
          >
            <TbBrandTiktok />
          </a> */}
        </div>
        <div className="hidden lg:flex lg:w-3/12">
          <Image
            className="w-full h-auto"
            src={LogoLg}
            alt="Basma Logo"
            width={LogoLg.width}
            loading="eager"
          />
        </div>
      </div>
      <p className="w-full flex justify-center text-light text-lg text-center font-medium sm:text-2xl lg:text-lg">
        Copyright &copy; 2023 PT. Basmasesa Adikreasi. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
