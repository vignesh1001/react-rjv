import React from "react";
import { Router } from "@reach/router";
import MainHeader from "./MainHeader";
import "./App.css";
//import { useMediaQuery } from "react-responsive";

//const baseUrl = `${process.env.PUBLIC_URL || ""}`;

export default () => {
  //const isDesktop = useMediaQuery({ query: "(min-width: 480px)" });
  //const isMobile = !isDesktop;

  const RootComponent = ({ children }) => (
    <div>
      <MainHeader />
      {children}
    </div>
  );
  return (
    <>
      <Router>
        <RootComponent path={`/`} />
      </Router>
      <footer />
    </>
  );
};
