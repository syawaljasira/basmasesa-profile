import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface PortfolioImageType {
  image: string | StaticImport;
  caption: string | StaticImport;
}

export interface PortfolioType {
  portfolio_id: number;
  title: string;
  thumbnail_image: string | StaticImport;
  description: string;
  client: string;
  slug: string;
  area: string;
  date: string;
  location: string;
  images: PortfolioImageType[];
}

export interface TestimonialType {
  image: string | StaticImport;
  name: string;
  description: string;
  status?: string;
}

export interface ClientType {
  name: string;
  image: string | StaticImport;
}

export interface ServiceType {
  title: string;
  description: string;
  slug: string;
}
