import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface PortfolioImageType {
  image: string;
  caption: string;
}

export interface PortfolioType {
  portfolio_id: number;
  portfolio_name: string;
  portfolio_thumbnail_image: {
    public_id: string;
    url: string;
  };
  portfolio_description: string;
  portfolio_client: string;
  portfolio_slug: string;
  portfolio_area: string;
  portfolio_date: string;
  portfolio_location: string;
  portfolio_images: PortfolioImageType[];
  service?: ServiceType;
}

export interface TestimonialType {
  image: string | StaticImport;
  name: string;
  description: string;
  status?: string;
}

export interface ClientType {
  client_id: string;
  client_name: string;
  client_slug: string;
  client_img: {
    public_id?: string | undefined;
    url: string;
  };
}

export interface ServiceType {
  service_id: string;
  service_name: string;
  service_slug: string;
  service_description: string;
  service_status: string;
  service_portfolio?: PortfolioType[];
}
