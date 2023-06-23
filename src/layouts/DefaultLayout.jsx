import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ConfigProvider } from "antd";

const DefaultLayout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.object,
};

export default DefaultLayout;
