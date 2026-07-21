import React, { CSSProperties, Fragment } from "react";
import "./Breadcrumb.scss";
import { HiChevronRight } from "react-icons/hi";
import Link from "next/link";

interface Pages {
  title: string;
  link: string;
}

interface IBreadcrumb {
  pages: Pages[];
  style?: CSSProperties;
  className?: string | undefined;
}

export const Breadcrumb = ({ pages, style, className }: IBreadcrumb) => {
  const lastPage = pages.length - 1;

  return (
    <div style={style} className={`breadcrumb ${className ? className : ""}`}>
      {pages.map((item, index) => {
        return (
          <Fragment key={index}>
            {index !== 0 && index !== pages.length ? (
              <HiChevronRight
                className={`icon-chevron text-lg sm:text-xl lg:text-1.3vw shrink-0`}
              />
            ) : (
              <Fragment></Fragment>
            )}
            <Link
              href={item.link}
              className={`breadcrumb-item font-medium text-sm sm:text-xl lg:text-1.1vw 2xl:text-1.2vw ${
                index === lastPage ? "breadcrumb-active" : ""
              }`}
            >
              {item.title}
            </Link>
          </Fragment>
        );
      })}
    </div>
  );
};
