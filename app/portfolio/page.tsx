"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { useInView } from "framer-motion";

import { Breadcrumb } from "@/components/Breadcrumb";
import { PortfolioCard } from "@/components/Card";
import { useMain } from "@/hooks/useMain";
import "./Portfolio.scss";
import Title from "@/components/Title";
import Spinner from "@/components/Spinner";

const animation = (isInView: boolean, delay: number) => {
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

const Portfolio = () => {
  const {
    service,
    services,
    portfolios,
    getServices,
    getPortfolios,
    setService,
    errorPortfolios,
  } = useMain();

  // Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [dropdown, setDropdown] = useState(false);

  const showDropdown = "transform opacity-100 scale-100 z-10 ease-out";
  const hiddenDropdown = "transform opacity-0 scale-95 -z-10 ease-out";

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleService = (service_option: string) => {
    setService(service_option);

    setDropdown(!dropdown);
  };

  const portfoliosList = useMemo(() => {
    return service === "All"
      ? portfolios
      : portfolios?.filter((p) => p?.service?.service_name === service);
  }, [portfolios, service]);

  useEffect(() => {
    if (portfolios === null) {
      getPortfolios();
    }

    if (services === null) {
      getServices();
    }
  }, [portfolios, services, getPortfolios, getServices]);

  return (
    <div>
      <Breadcrumb
        pages={[
          {
            title: "Home",
            link: "/",
          },
          {
            title: "Services",
            link: `/services`,
          },
          {
            title: "Portfolio",
            link: `/portfolio`,
          },
        ]}
      />
      <div ref={ref} className="portfolio text-light">
        <header className="w-full flex flex-col items-center">
          <Title
            className="text-4xl font-bold sm:text-4xl"
            style={animation(isInView, 0)}
          >
            Our Portfolio
          </Title>
        </header>
        <main className="portfolio__main w-full flex flex-col space-y-6 sm:space-y-10">
          <div className="text-dark" style={animation(isInView, 0.25)}>
            <div className="w-10/12 flex flex-row items-center space-x-5 mx-auto sm:space-x-6 lg:w-4/12 lg:mx-0">
              <h4 className="text-light text-xl font-bold sm:text-2xl">
                Service&nbsp;:
              </h4>
              <div className="w-full relative inline-block text-left lg:w-8/12">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-between items-center rounded-md border border-gray bg-dark-darken px-4 py-2 text-base font-semibold text-light shadow-sm hover:border-gray-dark focus:outline-none sm:text-2xl lg:px-6 lg:py-2"
                    id="menu-button"
                    onClick={toggleDropdown}
                  >
                    {service}
                    <HiChevronDown className="-mr-1 ml-2 h-5 w-5 sm:h-7 sm:w-7 lg:h-5 lg:w-5" />
                  </button>
                </div>

                <div
                  className={`absolute left-0 mt-2 w-110% origin-top-right rounded-md bg-dark-darken shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                    dropdown ? showDropdown : hiddenDropdown
                  } transition-all duration-300`}
                >
                  <div>
                    <span
                      onClick={() => handleService("All")}
                      className={`block cursor-pointer px-4 py-2 text-base font-semibold hover:bg-dark-darken-hover sm:px-6 sm:py-3 sm:text-xl ${
                        service === "All"
                          ? "bg-dark-darken-hover text-primary"
                          : "text-light"
                      }`}
                    >
                      All
                    </span>
                    {service?.length > 0
                      ? services?.map((item, index) => {
                          return (
                            <span
                              key={index}
                              onClick={() => handleService(item.service_name)}
                              className={`block cursor-pointer px-4 py-2 text-base font-semibold hover:bg-dark-darken-hover sm:px-6 sm:py-3 sm:text-xl ${
                                service === item.service_name
                                  ? "bg-dark-darken-hover text-primary"
                                  : "text-light"
                              }`}
                            >
                              {item.service_name}
                            </span>
                          );
                        })
                      : []}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="service__list w-full flex flex-col space-y-6 lg:space-y-10 lg:flex-row lg:flex-wrap">
            {portfoliosList === null ? (
              <div className="w-full h-[25vh] flex justify-center items-center">
                {errorPortfolios === null ? (
                  <Spinner />
                ) : (
                  <h2 className="text-xl font-bold text-white">
                    {errorPortfolios || "Maaf protfolio belum ada."}
                  </h2>
                )}
              </div>
            ) : (
              <>
                {portfoliosList?.map((item, index) => {
                  return (
                    <div className="w-full h-full lg:w-1/3 px-5" key={index}>
                      <PortfolioCard index={index} data={item} />
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
