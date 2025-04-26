import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Logo from "./Logo";

export const Layout = () => {
  return (
    <>
      <Logo />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
