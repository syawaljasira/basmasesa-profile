"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import SquarePrimary from "@/public/images/universal/square-primary.png";
import HeroImg from "@/public/images/universal/hero_image.png";
import Title from "@/components/Title";
import "./AboutUs.scss";

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
    transform: isInView ? "none" : "scale(0.6)",
    WebkitTransform: isInView ? "none" : "scale(0.6)",
    MozTransform: isInView ? "none" : "scale(0.6)",
    msTransform: isInView ? "none" : "scale(0.6)",
    OTransform: isInView ? "none" : "scale(0.6)",
    opacity: isInView ? 1 : 0,
    transition: `all 1s cubic-bezier(0.17, 1.5, 0.45, 1) ${delay + 0.4}s`,
  };
  return style;
};

const animation3 = (isInView: boolean, delay: number) => {
  const style = {
    transform: isInView ? "none" : "rotateZ(45deg)",
    WebkitTransform: isInView ? "none" : "rotateZ(45deg)",
    MozTransform: isInView ? "none" : "rotateZ(45deg)",
    msTransform: isInView ? "none" : "rotateZ(45deg)",
    OTransform: isInView ? "none" : "rotateZ(45deg)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.4}s`,
  };
  return style;
};

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="aboutUs text-light flex flex-col-reverse lg:flex-row justify-around">
      <div
        ref={ref}
        className="w-full flex flex-col space-y-6 sm:space-y-8 lg:w-5/12 justify-center"
      >
        <Title style={animation(isInView, 0)}>About Us</Title>
        <p
          className="text-md font-medium sm:text-2xl lg:text-1vw 2xl:text-1.15vw"
          style={animation(isInView, 0.25)}
        >
          <strong>Basmasesa</strong>&nbsp;— with more than 22 years experience
          in event, exhibition, festive decorations and interior contractor,
          Basmasesa is your one-stop event, exhibition & interior contractor for
          all your needs and wants. We offer a comprehensive service that makes
          your dream event come to life!
        </p>
      </div>
      <div
        className="aboutUs__image w-full flex lg:w-5/12"
        style={animation2(isInView, 0.5)}
      >
        <Image
          src={HeroImg}
          alt="Exhibition"
          width={HeroImg.width}
          height={HeroImg.height}
          loading="eager"
        />
      </div>
      <span className="square__image hidden lg:flex">
        <Image
          src={SquarePrimary}
          alt="Square"
          style={animation3(isInView, 0)}
          width={SquarePrimary.width}
          height={SquarePrimary.height}
        />
      </span>
    </div>
  );
};

export default AboutUs;
