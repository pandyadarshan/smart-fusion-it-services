import React, { useEffect } from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

import { Outlet, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log({ pathname });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="position-relative">
        <AppHeader />
        <Outlet />
        <AppFooter />
      </div>
    </>
  );
};

export default Layout;
