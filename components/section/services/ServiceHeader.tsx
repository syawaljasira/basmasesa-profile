import { useInView } from "framer-motion";
import { useRef } from "react";

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

const ServiceHeader = () => {
  // Animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <header
      ref={ref}
      className="w-10/12 flex flex-col items-center space-y-4 sm:space-y-6 sm:w-11/12 sm:mx-auto 2xl:space-y-10"
    >
      <h1
        className="text-4xl font-bold sm:text-6xl lg:text-3vw"
        style={animation(isInView, 0)}
      >
        Our Services
      </h1>
      <p
        className="text-base text-center font-medium sm:text-2xl lg:text-1.5vw 2xl:text-1.55vw"
        style={animation(isInView, 0.25)}
      >
        Basmasesa is a very experienced contractor,
        <br />
        We offer a comprehensive service that makes your dream event come to
        life!
      </p>
    </header>
  );
};

export default ServiceHeader;
