"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import SquareImg from "@/public/images/universal/square-primary.png";
import { ButtonSimple } from "../../components/Button";
import "./VisionMission.scss";

const animation = (isInView: boolean, delay: number) => {
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

const animation2 = (isInView: boolean, delay: number) => {
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

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className="visionMission flex flex-col space-y-12 sm:space-y-16 lg:space-y-0 lg:space-x-10 lg:flex-row lg:flex-wrap lg:justify-around"
    >
      <div className="w-full flex flex-col space-y-4 justify-center items-center sm:space-y-5 lg:w-5/12 2xl:space-y-7">
        <h3
          className="text-2xl text-light font-semibold tracking-wide sm:text-4xl"
          style={animation(isInView, 0)}
        >
          Our Vision
        </h3>
        <p
          className="text-md text-light font-medium text-center sm:text-2xl lg:text-lg"
          style={animation(isInView, 0.25)}
        >
          At Basmasesa, our vision is to become the leading event, exhibition &
          interior contractor in the world. We strive for excellence in
          everything we do and believe in delivering outstanding results for
          every project we work on.
        </p>
      </div>
      <div className="w-full flex flex-col space-y-4 justify-center items-center sm:space-y-5 lg:w-5/12 2xl:space-y-7">
        <h3
          className="text-2xl text-light font-semibold tracking-wide sm:text-4xl"
          style={animation(isInView, 0.5)}
        >
          Our Mission
        </h3>
        <p
          className="text-md text-light font-medium text-center sm:text-2xl lg:text-lg"
          style={animation(isInView, 0.75)}
        >
          Our mission is to provide clients with high-quality services that are
          tailored to their individual needs and expectations. We are dedicated
          to creating unique experiences that will leave a lasting impression on
          your guests.
        </p>
      </div>
      <div
        className="w-full flex justify-center items-center lg:pt-20"
        style={animation(isInView, 1)}
      >
        <ButtonSimple to="/services">See Our Services</ButtonSimple>
      </div>
      <span className="square__image hidden lg:flex">
        <Image
          src={SquareImg}
          alt="Square"
          style={animation2(isInView, 1.25)}
          width={SquareImg.width}
          height={SquareImg.height}
          loading="eager"
        />
      </span>
    </div>
  );
};

export default VisionMission;
