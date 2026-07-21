"use client";

import { Fragment, useEffect } from "react";

import ServiceHeader from "@/components/section/services/ServiceHeader";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ServiceCard } from "@/components/Card";
import Spinner from "@/components/Spinner";
import { useMain } from "@/hooks/useMain";
import "./Service.scss";

const Service = () => {
  const { services, getServices } = useMain();

  useEffect(() => {
    if (services === null) {
      getServices();
    }
  }, [services, getServices]);

  return (
    <>
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
        ]}
      />
      {services === null ? (
        <div className="w-full h-[50vh] flex justify-center items-center z-50 bg-dark">
          <Spinner />
        </div>
      ) : (
        <div className="service text-light">
          <ServiceHeader />

          <main className="service__main w-full flex flex-col space-y-6 sm:space-y-10 sm:items-center lg:flex-row lg:flex-wrap lg:space-y-0 lg:justify-evenly lg:items-start">
            {/* {ServicesData.map((service, index) => {
              return (
                <div
                  key={index}
                  style={animation2(isInView, 0.25 * (index + 1) + 0.25)}
                >
                  <ServiceCard
                    index={index}
                    title={service.title}
                    description={service.description}
                    slug={service.slug}
                  />
                </div>
              );
            })} */}

            {services?.map((item, index) => {
              return (
                <Fragment key={index}>
                  <ServiceCard
                    index={index}
                    title={item?.service_name}
                    description={item?.service_description}
                    slug={item?.service_slug}
                  />
                </Fragment>
              );
            })}
          </main>
        </div>
      )}
    </>
  );
};

export default Service;
