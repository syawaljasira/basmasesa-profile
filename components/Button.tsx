import Link from "next/link";
import { Fragment } from "react";

interface IButton {
  children: React.ReactNode;
  to?: string;
  type?: "button" | "submit" | "reset";
}

export const ButtonSimple = ({ children, to, type = "button" }: IButton) => {
  return (
    <Fragment>
      {to ? (
        <Link
          href={to}
          className="flex border-2 border-primary text-primary text-lg font-bold px-7 py-2 rounded-md sm:text-3xl sm:px-9 sm:py-3 lg:px-8 lg:py-2 lg:text-xl 2xl:px-10 2xl:py-3 transition-all duration-200 ease-out hover:text-dark hover:border-primary hover:bg-primary"
        >
          {children}
        </Link>
      ) : (
        <button
          type={type || "button"}
          className="flex border-2 border-primary text-primary text-lg font-bold px-7 py-2 rounded-md sm:text-3xl sm:px-9 sm:py-3 lg:px-8 lg:py-2 lg:text-xl 2xl:px-10 2xl:py-3 transition-all duration-200 ease-out hover:text-dark hover:border-primary hover:bg-primary"
        >
          {children}
        </button>
      )}
    </Fragment>
  );
};
