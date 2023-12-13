"use client";
import Aos from "aos";
import { Fragment, useEffect } from "react";
import "aos/dist/aos.css";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Aos.init({ duration: 6000 });
    }
  }, []);
  return <Fragment>{children}</Fragment>;
};

export default RootProvider;
