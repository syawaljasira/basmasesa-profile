import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import React, { Fragment, useRef, useState } from "react";
import { useInView } from "framer-motion";

import TestiJSON from "../../constants/testimonial.json";
import { TestiCard } from "../../components/Card";
import Title from "../../components/Title";
import "./Testimonial.scss";

import { TestimonialType } from "@/lib/types";

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
    transform: isInView ? "none" : "translateX(50px)",
    WebkitTransform: isInView ? "none" : "translateX(50px)",
    MozTransform: isInView ? "none" : "translateX(50px)",
    msTransform: isInView ? "none" : "translateX(50px)",
    OTransform: isInView ? "none" : "translateX(50px)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.3}s`,
  };
  return style;
};

const Testimonial = () => {
  const [slide, setSlide] = useState(1);
  const laptopWidth = 1024;

  // Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const nextSlide = () => {
    if (slide !== TestiJSON.length) {
      setSlide(slide + 1);
    }
  };

  const prevSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    }
  };

  return (
    <div ref={ref} className="testimonial">
      <Title
        className="text-center sm:w-10/12 sm:mx-auto"
        style={animation(isInView, 0)}
      >
        What They Say Who Have Work With Us?
      </Title>
      <div className={`testimonial__list slide-${slide}`}>
        {TestiJSON.map((item: TestimonialType, index: number) => {
          return (
            <Fragment key={index}>
              <TestiCard
                index={index}
                name={item.name}
                status={item.status}
                image={item.image}
                description={item.description}
                style={animation2(isInView, 0.25 * (index + 1))}
              />
            </Fragment>
          );
        })}
      </div>
      <div
        className={`testimonial__slide flex justify-center space-x-5 sm:space-x-6`}
      >
        <HiChevronLeft
          onClick={prevSlide}
          className={`icon-prev ${slide === 1 && "icon-disabled"}`}
        />
        {window.innerWidth > laptopWidth ? (
          <HiChevronRight
            onClick={slide < 2 ? nextSlide : undefined}
            className={`icon-next ${slide === 2 && "icon-disabled"}`}
          />
        ) : (
          <HiChevronRight
            onClick={slide < TestiJSON.length ? nextSlide : undefined}
            className={`icon-next ${
              slide === TestiJSON.length && "icon-disabled"
            }`}
          />
        )}
      </div>
    </div>
  );
};

export default Testimonial;
