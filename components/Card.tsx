"use client";

import { ComponentPropsWithoutRef, ComponentPropsWithRef, useRef } from "react";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import "./Card.scss";
import { useInView } from "motion/react";
import Image from "next/image";

import { PortfolioType } from "@/lib/types";
import { useMain } from "@/hooks/useMain";
import { StaticImport } from "next/dist/shared/lib/get-img-props.js";
import { BadgePrimary } from "./Badge";

const animation2 = (isInView: boolean, delay: number) => {
  const style = {
    transform: isInView ? "none" : "translateY(50px)",
    WebkitTransform: isInView ? "none" : "translateY(50px)",
    MozTransform: isInView ? "none" : "translateY(50px)",
    msTransform: isInView ? "none" : "translateY(50px)",
    OTransform: isInView ? "none" : "translateY(50px)",
    opacity: isInView ? 1 : 0,
    transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay + 0.3}s`,
  };

  return style;
};

interface ITestiCard extends ComponentPropsWithoutRef<"div"> {
  index: number;
  image: string | StaticImport;
  name: string;
  description: string;
  status?: string;
}

export const TestiCard = ({
  index,
  image,
  name,
  description,
  status,
  ...props
}: ITestiCard) => {
  return (
    <div
      key={index}
      className="testiCard flex flex-col items-center space-y-4 border-2 border-gray-dark rounded-md text-light sm:space-y-7 lg:space-y-6 2xl:space-y-8"
      {...props}
    >
      <Image src={image} alt="User Avatar" />
      <div className="flex flex-col items-center lg:space-y-1 2xl:space-y-3">
        <h5 className="font-bold text-xl tracking-wide sm:text-3xl">{name}</h5>
        <h6 className="font-semibold text-lg text-primary sm:text-2xl">
          {status}
        </h6>
      </div>
      <p className="font-medium text-md text-light text-center sm:text-xl">
        {description}
      </p>
    </div>
  );
};

interface IServiceCard extends ComponentPropsWithRef<"div"> {
  index: number;
  title: string;
  description: string;
  slug?: string;
}

export const ServiceCard = ({
  index,
  title,
  description,
  slug,
  ...props
}: IServiceCard) => {
  const { setService } = useMain();
  // Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        key={index}
        className="serviceCard flex flex-col items-center justify-between bg-dark-darken rounded-md text-light"
        style={animation2(isInView, 0.25 * (index + 1) + 0.25)}
        {...props}
      >
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 lg:space-y-8 2xl:space-y-10">
          <h3 className="text-2xl font-bold sm:text-3xl">{title}</h3>
          <p className="text-lg font-medium sm:text-lg 2xl:leading-tight">
            {description}
          </p>
        </div>
        <Link
          onClick={() => setService(title)}
          href={`/portfolio?service=${slug}`}
        >
          <button className="flex items-center space-x-1 border-b border-primary text-primary text-lg font-semibold sm:border-b-2 sm:text-lg lg:hover:space-x-2">
            <span>View all portfolio</span>
            <HiChevronRight className="text-xl sm:text-lg transition-all ease-out duration-200" />
          </button>
        </Link>
      </div>
    </div>
  );
};

interface IPortfolioCard {
  index: number;
  data: PortfolioType;
}

export const PortfolioCard = ({ index, data }: IPortfolioCard) => {
  return (
    <div
      key={index}
      className="portfolioCard w-full flex flex-col justify-between items-center bg-dark-darken rounded-md text-light mx-auto"
    >
      <div className="flex flex-col space-y-5 items-center sm:space-y-6">
        <div className="portfolioCard__image rounded-md">
          <Image
            src={data.portfolio_thumbnail_image?.url}
            alt="Portfolio"
            width={1280}
            height={720}
          />
        </div>

        <h3 className="text-xl font-bold text-center sm:text-3xl lg:leading-none">
          {data.portfolio_name}
        </h3>

        <BadgePrimary className="items-self-center">Exhibition</BadgePrimary>

        <div className="w-full flex flex-col text-sm sm:text-2xl lg:text-xs xl:text-sm 2xl:text-base">
          {data.portfolio_location !== "-" && (
            <p>{`- ${data.portfolio_location}`}</p>
          )}
          {data.portfolio_area !== "-" && <p>{`- ${data.portfolio_area}`}</p>}
        </div>
      </div>
      <Link
        href={`/portfolio/${data?.service?.service_slug}/${data.portfolio_slug}`}
      >
        <button className="flex items-center space-x-1 border-b border-primary text-primary text-lg font-semibold sm:border-b-2 lg:hover:space-x-2 cursor-pointer">
          <span>View details</span>
          <HiChevronRight className="text-xl sm:text-lg transition-all ease-out duration-200" />
        </button>
      </Link>
    </div>
  );
};
