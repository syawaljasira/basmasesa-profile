"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

import SquareDark from "@/public/images/universal/square-dark.png";
import Title from "@/components/Title";
import "./Clients.scss";
import { useMain } from "@/hooks/useMain";

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

const Clients = () => {
  // Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const { clients, getClients } = useMain();

  useEffect(() => {
    if (clients === null) {
      getClients();
    }
  }, [clients, getClients]);

  return (
    <div ref={ref} className="clients">
      <Title className="text-center" style={animation(isInView, 0)}>
        Trusted By Our Clients
      </Title>
      <div className="clients__list flex flex-wrap justify-evenly">
        {clients?.map((item, index: number) => {
          return (
            <div
              key={index}
              className="w-6/12 px-4 py-2 flex justify-center items-center z-10 sm:px-6 sm:py-3 lg:px-8 lg:py-0 lg:w-4/12 2xl:px-10"
            >
              <Image
                src={item?.client_img?.url}
                alt={item?.client_name}
                style={animation2(isInView, 0.25 + 0.25 * (index + 1))}
                width={500}
                height={500}
              />
            </div>
          );
        })}

        <span className="square__image flex">
          <Image
            src={SquareDark}
            alt="Square"
            style={animation3(isInView, 0.75)}
            width={SquareDark.width}
            height={SquareDark.height}
          />
        </span>
        <span className="square__image-2 flex">
          <Image
            src={SquareDark}
            alt="Square"
            style={animation3(isInView, 1)}
            width={SquareDark.width}
            height={SquareDark.height}
          />
        </span>
      </div>
    </div>
  );
};

export default Clients;
