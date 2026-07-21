"use client";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Portfolio1 from "@/public/images/portfolio/kbp-ice-2023/img-11.png";
import Portfolio2 from "@/public/images/portfolio/kbp-ikea-2022/img-1.png";
import Portfolio3 from "@/public/images/portfolio/kbp-aeon-2022/img-4.png";
import SquareDark from "@/public/images/universal/square-dark.png";
import Title from "../../components/Title";
import "./SomeWork.scss";

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
    transform: isInView ? "none" : "scale(0.8)",
    WebkitTransform: isInView ? "none" : "scale(0.8)",
    MozTransform: isInView ? "none" : "scale(0.8)",
    msTransform: isInView ? "none" : "scale(0.8)",
    OTransform: isInView ? "none" : "scale(0.8)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 1.5, 0.45, 1) ${delay + 0.4}s`,
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

const SomeWork = () => {
  const [slide, setSlide] = useState(1);

  // Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const nextSlide = () => {
    if (slide !== 4) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    }
  };

  return (
    <div ref={ref} className="someWork flex flex-col">
      <Title
        className="text-center sm:w-11/12 sm:mx-auto"
        style={animation(isInView, 0)}
      >
        Some Of The Results Of Our Work
      </Title>
      <div
        className={`someWork__slide flex flex-row lg:flex-wrap pt-10 sm:pt-12 sm:pb-2 lg:pt-0 slide-${slide}`}
      >
        <div
          className="workCard flex justify-center items-center lg:mb-8 2xl:mb-12"
          style={animation2(isInView, 0.3)}
        >
          <div className="w-full h-full flex flex-col justify-between items-start bg-dark shadow-lg text-light p-5vw lg:p-2vw">
            <div className="flex flex-col items-start sm:space-y-1 2xl:space-y-3">
              <h4 className="text-3xl font-bold tracking-wide sm:text-5xl lg:text-2.5vw 2xl:text-2.7vw 2xl:pb-1 2xl:pt-2">
                Basmasesa
              </h4>
              <h6 className="text-xl font-medium sm:text-3xl sm:font-semibold lg:text-1.6vw lg:pt-1 2xl:text-1.7vw">
                Event, Exhibition & Interior
              </h6>
              <p className="text-base font-medium pt-2 sm:text-2xl lg:text-1vw 2xl:text-1.1vw">
                Build your imagine design and make it happen.
              </p>
            </div>
            <Link
              href="/portfolio"
              className="flex items-center space-x-1 border-b border-primary text-primary text-lg font-semibold sm:border-b-2 sm:text-2xl lg:text-1.1vw lg:hover:space-x-2 2xl:text-1.2vw"
            >
              <span>View all portfolio</span>
              <HiChevronRight className="text-xl sm:text-2xl lg:text-1.2vw transition-all ease-out duration-200 2xl:text-1.25vw" />
            </Link>
          </div>
        </div>
        <Link
          className="workCard flex justify-center items-center lg:mb-8 lg:pl-8 2xl:mb-12 2xl:pl-12"
          style={animation2(isInView, 0.6)}
          href="/portfolio/exhibition/stand-kbp-modul-ice-2023"
        >
          <Image
            className="workCard-link w-full h-auto rounded-lg lg:rounded-none"
            src={Portfolio1}
            alt="KBP ICE Exhibition 2023"
            width={Portfolio1.width}
            height={Portfolio1.height}
            loading="eager"
          />
        </Link>
        <Link
          className="workCard flex justify-center items-center lg:pr-8 2xl:pr-12"
          style={animation2(isInView, 0.9)}
          href="/portfolio/exhibition/stand-kbp-modul-ikea-2022"
        >
          <Image
            className="workCard-link w-full h-auto rounded-lg lg:rounded-none"
            src={Portfolio2}
            alt="KBP IKEA Exhibition 2022"
            width={Portfolio2.width}
            height={Portfolio2.height}
            loading="eager"
          />
        </Link>
        <Link
          className="workCard flex justify-center items-center"
          style={animation2(isInView, 1.2)}
          href="portfolio/exhibition/stand-kbp-modul-aeon-2022"
        >
          <Image
            className="workCard-link w-full h-auto rounded-lg lg:rounded-none"
            src={Portfolio3}
            alt="KBP AEON Exhibition 2022"
            width={Portfolio3.width}
            height={Portfolio3.height}
            loading="eager"
          />
        </Link>
      </div>
      <div
        className={`someWork__btn flex justify-center space-x-5 sm:space-x-6 lg:hidden`}
      >
        <button onClick={prevSlide}>
          <HiChevronLeft
            className={`icon-prev ${slide === 1 && "icon-disabled"}`}
          />
        </button>
        <button onClick={nextSlide}>
          <HiChevronRight
            className={`icon-next ${slide === 4 && "icon-disabled"}`}
          />
        </button>
      </div>
      <span className="square__image-1 hidden lg:flex">
        <Image
          src={SquareDark}
          alt="Square"
          style={animation3(isInView, 0.6)}
          width={SquareDark.width}
          height={SquareDark.height}
        />
      </span>
      <span className="square__image-2 hidden lg:flex">
        <Image
          src={SquareDark}
          alt="Square"
          style={animation(isInView, 1.2)}
          width={SquareDark.width}
          height={SquareDark.height}
        />
      </span>
    </div>
  );
};

export default SomeWork;
