import Link from "next/link";
import { Fragment } from "react";

interface IBadge {
  children: React.ReactNode;
  className?: string;
}

export const BadgePrimary = ({ children, className = "" }: IBadge) => {
  return (
    <div
      className={`self-start flex border-2 border-primary/75 bg-primary/15 text-primary text-base font-semibold px-3 py-1 rounded-full cursor-default ${className}`}
    >
      {children}
    </div>
  );
};
