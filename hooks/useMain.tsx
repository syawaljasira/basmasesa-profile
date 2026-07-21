import MainContext from "@/context/MainContext";
import { useContext } from "react";

export function useMain() {
  const context = useContext(MainContext);

  // Enforce compile-time safety at runtime
  if (!context) {
    throw new Error("useMain must be used within a MainProvider");
  }

  return context;
}
