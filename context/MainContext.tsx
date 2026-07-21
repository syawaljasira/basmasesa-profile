"use client";

import { ClientType, PortfolioType, ServiceType } from "@/lib/types";
import axios from "axios";
import { createContext, SetStateAction, useState, Dispatch } from "react";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
// const assetsUrl = process.env.NEXT_PUBLIC_BASE_ASSETS_URL;

interface IMainContext {
  service: string;
  setService: Dispatch<SetStateAction<string>>;
  clients: ClientType[] | null | undefined;
  services: ServiceType[] | null | undefined;
  portfolios: PortfolioType[] | null | undefined;
  postInboxMessage: (
    body: Record<string, unknown>,
    callback?: () => void,
  ) => void;
  getClients: () => void;
  getServices: () => void;
  getPortfolios: () => void;
  errorClients: string | null;
  errorServices: string | null;
  errorPortfolios: string | null;
}

const MainContext = createContext<IMainContext | null>(null);

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const [service, setService] = useState("All");
  const [clients, setClients] = useState(null);
  const [services, setServices] = useState(null);
  const [portfolios, setPortfolios] = useState(null);

  const [errorClients, setErrorClients] = useState(null);
  const [errorServices, setErrorServices] = useState(null);
  const [errorPortfolios, setErrorPortfolios] = useState(null);

  const headersConfig = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const postInboxMessage = async (
    body: Record<string, unknown>,
    callback?: () => void,
  ) => {
    await axios
      .post(
        `${baseUrl}/inbox`,
        {
          inbox_name: body?.inbox_name,
          inbox_email: body?.inbox_email,
          inbox_phone: body?.inbox_phone,
          inbox_message: body?.inbox_message,
        },
        {
          headers: headersConfig,
        },
      )
      .then((res) => {
        console.log(res.data?.data);

        if (callback) callback();
      })
      .catch((err) => {
        console.error(err?.message);
      });
  };

  const getClients = async () => {
    await axios
      .get(`${baseUrl}/clients`)
      .then((res) => {
        setClients(res?.data?.data);
      })
      .catch((err) => {
        setClients(null);
        setErrorClients(err.message);
      });
  };

  const getServices = async () => {
    await axios
      .get(`${baseUrl}/services`)
      .then((res) => {
        setServices(res?.data?.data);
      })
      .catch((err) => {
        setServices(null);

        setErrorServices(err.message);
      });
  };

  const getPortfolios = async () => {
    await axios
      .get(`${baseUrl}/portfolios`)
      .then((res) => {
        setPortfolios(res?.data?.data);
      })
      .catch((err) => {
        setPortfolios(null);

        setErrorPortfolios(err.message);
      });
  };

  return (
    <MainContext.Provider
      value={{
        service,
        setService,
        clients,
        services,
        portfolios,
        postInboxMessage,
        getClients,
        getServices,
        getPortfolios,
        errorClients,
        errorServices,
        errorPortfolios,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainContext;
