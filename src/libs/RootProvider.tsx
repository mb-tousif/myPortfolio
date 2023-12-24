import { Fragment } from "react";

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return <Fragment>{children}</Fragment>;
};

export default RootProvider;
