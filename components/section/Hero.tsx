"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
// import { TbBrandTiktok } from "react-icons/tb";

import HeroImg1 from "@/public/images/universal/hero-1.png";
import HeroImg2 from "@/public/images/universal/hero-4.png";
import { ButtonSimple } from "../../components/Button";
import "./Hero.scss";

const animation = (isInView: boolean, delay: number) => {
  const style = {
    transform: isInView ? "none" : "translateX(-100px)",
    WebkitTransform: isInView ? "none" : "translateX(-100px)",
    MozTransform: isInView ? "none" : "translateX(-100px)",
    msTransform: isInView ? "none" : "translateX(-100px)",
    OTransform: isInView ? "none" : "translateX(-100px)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.4}s`,
  };
  return style;
};

const animation2 = (isInView: boolean, delay: number) => {
  const style = {
    transform: isInView ? "none" : "translateY(50px)",
    WebkitTransform: isInView ? "none" : "translateY(50px)",
    MozTransform: isInView ? "none" : "translateY(50px)",
    msTransform: isInView ? "none" : "translateY(50px)",
    OTransform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.4}s`,
  };
  return style;
};

const Hero = () => {
  const phoneNumber = "6281553046054";
  const waMessage = "Hallo Basmasesa!";

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="hero w-full flex flex-col-reverse lg:flex-row justify-end lg:justify-start items-start bg-dark h-91vh"
    >
      <div className="hero__container w-full lg:w-6/12 flex flex-col items-start pt-6 sm:pt-8 lg:pt-0">
        <div className="hero__header w-full flex flex-col sm:space-y-2 2xl:space-y-6">
          <h1
            className="text-4xl font-bold text-light tracking-wide sm:text-6xl lg:text-7xl leading-[0.75]"
            style={animation(isInView, 0)}
          >
            Basmasesa
          </h1>
          <h3
            className="text-2xl font-bold text-light tracking-wide sm:text-4xl lg:text-4xl"
            style={animation(isInView, 0.25)}
          >
            Event, Exhibition & Interior
          </h3>
          <p
            className="text-md font-medium text-light pt-3 sm:text-2xl lg:text-2xl 2xl:pt-4"
            style={animation(isInView, 0.5)}
          >
            Build your imagine design and make it happen.
          </p>
        </div>
        <a
          href={`https://wa.me/${phoneNumber}?text=${waMessage}`}
          style={animation(isInView, 0.75)}
          id="cta_call_now"
        >
          <ButtonSimple>Call Now</ButtonSimple>
        </a>
        <div className="hero__link flex flex-col space-y-10 text-light text-2xl sm:space-y-16 sm:text-4xl lg:space-y-0 lg:text-4xl lg:flex-row lg:items-center lg:space-x-12">
          <a
            href={`https://wa.me/${phoneNumber}?text=${waMessage}`}
            style={animation2(isInView, 1)}
            id="cta_wa"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/basmasesa.kreasi/"
            target="_blank"
            rel="noreferrer"
            style={animation2(isInView, 1.25)}
            id="cta_ig"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="hero__container w-full lg:w-6/12 flex flex-col lg:space-y-2 xl:space-y-0 items-start py-5 px-0 sm:p-5">
        <div className="w-10/12 sm:w-9/12 xl:w-8/12 flex h-[22vh] sm:h-[23vh] lg:h-[28vh] xl:h-[35vh]">
          <Image
            className="w-auto h-auto object-contain object-center"
            src={HeroImg1}
            alt="Stand Kota Baru Parahyangan AEON"
            width={HeroImg1.width}
            height={HeroImg1.height}
            loading="eager"
          />
        </div>
        <div className="w-10/12 sm:w-9/12 xl:w-8/12 flex h-[22vh] sm:h-[23vh] lg:h-[28vh] xl:h-[35vh] self-end -mt-4 lg:mt-0 xl:-mt-5">
          <Image
            className="w-auto h-auto object-contain object-center"
            src={HeroImg2}
            alt="Stand Kota Baru Parahyangan AEON"
            width={HeroImg2.width}
            height={HeroImg2.height}
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
